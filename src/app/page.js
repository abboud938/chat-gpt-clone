"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Vector from "../../public/document.svg";
import Image from "next/image";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import Bot from "../../public/logo.png"
import Human1 from "../../public/background.jpg"
import Human2 from "../../public/human2.jpeg"
export default function Home() {
  const { userId } = useAuth();
  const router = useRouter();
  const [typingStatus, setTypingStatus] = useState("human1");
  return (
    <>
      {userId ? router.push("/home") : ""}
      <div className=" w-full h-[90vh] bg-primaryColor md:flex-row flex flex-col justify-center items-center gap-4 md:p-8 relative">
        <div className="gap-10 md:w-full h-full w-[80%] flex flex-col justify-center items-center text-center md:gap-4">
          <h1 className="font-bold md:text-9xl text-6xl text-transparent bg-gradient bg-clip-text ">
            Wellcome
          </h1>
          <h1 className="font-bold text-3xl text-secondaryColor">
            Gemenin Chat-GPT Clone App
          </h1>
          <h1 className="font-bold text-md w-[60%] text-textColor">
            Here You Can Ask Any Thing and you will get an answer with
            <span className="font-black text-sm underline text-secondaryColor cursor-pointer">
              {" "}
              Gemini AI Powered By Google{" "}
            </span>
          </h1>
          <motion.button
            className="bg-secondaryColor w-[70%] text-textColor rounded-lg p-4 md:w-[50%] font-bold text-2xl"
            whileHover={{
              backgroundColor: "#dfdfdf",
              color: "#f36b19",
              transition: { duration: 2, type: "spring" },
            }}
          >
            <Link href="/home"> Start New Chat With AI </Link>
          </motion.button>
        </div>
        <div className="md:hidden flex justify-center items-center gap-2 w-[80%] h-[30px] absolute bottom-28">
          <div className="w-[50px] h-[50px] rounded-full relative">
          <Image
            src={
              typingStatus === "human1"
                ? Human1
                : typingStatus === "human2"
                ? Human2
                : Bot
            }
            className="object-fill rounded-full"
            fill
            alt=""
          />
          </div>
          <div className="p-2 rounded-3xl bg-secondaryColor bg-opacity-50">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Mike:Help Me , I Need Some Answers",
              2000,
              () => {
                setTypingStatus("bot");
              },
              "Bot:Suer , Please Write Your Questions",
              2000,
              () => {
                setTypingStatus("human2");
              },
              "Nataly:Translate This Sentence Please",
              2000,
              () => {
                setTypingStatus("bot");
              },
              "Bot:Write The Sentence And Language",
              2000,
              () => {
                setTypingStatus("human1");
              },
            ]}
            wrapper="span"
            repeat={Infinity}
            cursor={true}
            omitDeletionAnimation={true}
          />
          </div>
        </div>
        <div className="vector w-full h-full hidden md:flex justify-center items-center">
          <motion.div
            className="h-[75%] w-[75%] relative"
            animate={{ scale: [1, 1.1], rotate: [0, 2] }}
            transition={{
              duration: 2,
              repeatType: "reverse",
              repeat: Infinity,
            }}
          >
            <Image src={Vector} alt="image" fill className="object-fill" />
          </motion.div>
        </div>
      </div>
    </>
  );
}
