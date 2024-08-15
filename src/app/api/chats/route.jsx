"use server";

import { auth } from "@clerk/nextjs/server";
import model from "../../_lib/ai";
import connect from "../../_lib/mongoDB";
import Chat from "../../_models/chat";
import userChats from "../../_models/userChats";

// GET ALL THE USER CHATS
export async function GET(request) {
  const conn = await connect();
  const { userId } = auth();
  try {
    const userchats = await userChats.find({ userId });

    if (!userchats.length == 0) {
      return new Response(JSON.stringify(userchats[0].chats), { status: 200 });
    } else {
      return new Response(JSON.stringify([]), { status: 200 });
    }
  } catch (err) {
    return new Response(JSON.stringify(err), { status: 500 });
  }
}
export async function POST(request) {
  const conn = await connect();
  const { userId } = auth();
  const { chatDefaultName } = await request.json();
  try {
    const newChat = new Chat({
      userId: userId,
      history: [],
    });
    const savedChat = await newChat.save();
    try {
      //check if the user exist
      const userExist = await userChats.find({ userId });
      if (!userExist.length) {
        const newUserChats = new userChats({
          userId: userId,
          chats: [
            {
              _id: savedChat._id,
              title: chatDefaultName,
            },
          ],
        });
        await newUserChats.save();
      } else {
        await userChats.updateOne(
          { userId: userId },
          {
            $push: {
              chats: {
                _id: savedChat._id,
                title: chatDefaultName,
              },
            },
          }
        );
      }
    } catch (error) {
      console.log(error);
    }
    return new Response(JSON.stringify(savedChat._id), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 201,
    });
  } catch (err) {
    return new Response(JSON.stringify(err), { status: 500 });
  }
}
