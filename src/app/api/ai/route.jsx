"use server";
import { convertToCoreMessages, streamText } from "ai";
import { google } from "@ai-sdk/google";
import { auth } from "@clerk/nextjs/server";
import Chat from "../../_models/chat";

export async function POST(req) {
  const { messages, chatId } = await req.json();
  const { userId } = auth();
  const lastMessage = messages[messages.length - 1];
  await addMessage(chatId, userId, lastMessage);
  const result = await streamText({
    model: google("models/gemini-1.5-pro-latest"),
    system: "You are a helpful assistant.",
    messages: convertToCoreMessages(messages),
    async onFinish({ text }) {
      await addMessage(chatId, userId, { role: "assistant", content: text });
    },
  });
  return result.toDataStreamResponse();
}

const addMessage = async (chatId, userId, message) => {
  try {
    const newChat = await Chat.updateOne(
      { _id: chatId, userId: userId },
      {
        $push: {
          history: {
            role: message.role,
            content: message.content,
          },
        },
      }
    );
    if (newChat) {
      console.log(newChat);
    } else {
      console.log("not done");
    }
  } catch (err) {
    console.log(err);
  }
};
