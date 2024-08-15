"use server";

import { auth } from "@clerk/nextjs/server";
import connect from "../../../_lib/mongoDB";
import Chat from "../../../_models/chat";
import userChats from "../../../_models/userChats";

export async function GET(req, param) {
  const conn = await connect();
  const chatid = param.params.chatid;
  const { userId } = auth();
  try {
    const chat = await Chat.findOne({ _id: chatid, userId });
    return new Response(JSON.stringify(chat), { status: 200 });
  } catch (err) {
    return new Response(err, { status: 500 });
  }
}

export async function DELETE(req, param) {
  const conn = await connect();
  const chatId = await param.params.chatid;
  const { userId } = auth();
  try {
    const res = await userChats.updateOne(
      { userId: userId },
      { $pull: { chats: { _id: chatId } } }
    );
    return new Response("done", { status: 200 });
  } catch (err) {
    return new Response("error", { status: 500 });
  }
}
