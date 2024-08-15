"use client";

import {
  faArrowCircleUp,
  faFileImage,
  faStopCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import ChatBubble from "../../../../components/chatBubble";
import { useChat } from "ai/react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Page({ params }) {
  const endRef = useRef();
  const chatId = params.id;
  // Query To Get All Messages From Specifi Chat Based On Id Params
  const { isPending, data } = useQuery({
    queryKey: ["chat", chatId],
    queryFn: () =>
      fetch(`../../../../api/chats/${chatId}`, {
        method: "GET",
        credentials: "include",
      }).then((res) => res.json()),
  });
  const { messages, input, handleInputChange, handleSubmit, isLoading, stop,append } =
    useChat({
      api: "../../../../api/ai",
      initialMessages: data
        ? data?.history
        : [{}],
        body : {chatId : chatId}
    });
  useEffect(() => {
    endRef?.current?.scrollIntoView({ behavior: "smooth" }); 
  }, [data, messages]);
  if (params) {
    return isPending ? (
      <div className="h-full w-full text-textColor flex justify-center items-center  p-4 text-3xl">
        LOADING .....
      </div>
    ) : data?._id === params?.id ? (
      <>
        <div
          className="h-full overflow-y-scroll p-2 flex flex-col justify-start items-center gap-3 font-semibold w-[80%]"
          style={{ scrollbarWidth: "none" }}
        >
          {messages?.map((message) => (
            <ChatBubble
              message={message.content}
              role={message.role}
              key={message.id}
            />
          ))}

          <div ref={endRef}></div>
        </div>
        <div className="flex justify-center items-center h-[10%] w-full">
          <form
            onSubmit={handleSubmit}
            className="bg-primaryColor rounded-full  w-1/2 flex items-center justify-between p-4 gap-2"
          >
            <label htmlFor="file">
              <FontAwesomeIcon
                icon={faFileImage}
                className="text-secondaryColor w-[25px] h-[25px]"
              />
            </label>
            <input type="file" hidden id="file" name="file" />
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              className="outline-none border-none w-full bg-transparent text-textColor"
              name="question"
              placeholder="Ask Any Thing ..."
              disabled={isLoading}
            />
            {!isLoading ? (
              <button className="" type="submit">
                <FontAwesomeIcon
                  icon={faArrowCircleUp}
                  className="text-secondaryColor w-[25px] h-[25px]"
                />
              </button>
            ) : (
              <motion.button
                onClick={stop}
                animate={{ scale: 1.2 }}
                transition={{ repeatType: "reverse", repeat: Infinity }}
              >
                <FontAwesomeIcon
                  icon={faStopCircle}
                  className="w-[25px] h-[25px]"
                />
              </motion.button>
            )}
          </form>
        </div>
      </>
    ) : (
      <div className="h-full w-full text-textColor flex justify-center items-center  p-4 text-3xl">
        There Is Invalid Chat Id Please Try Again
      </div>
    );
  } else {
    return (
      <>
        <div>Please Start A new Chat To Save It</div>
        <Link href="/home" />
      </>
    );
  }
}
