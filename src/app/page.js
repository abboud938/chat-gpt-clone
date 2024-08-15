"use client"
import { motion} from "framer-motion"
import Link from "next/link";
import Vector from "../../public/document.svg"
import Image from "next/image";
import {useAuth} from "@clerk/nextjs"
import { useRouter } from "next/navigation";
export default function Home() {
  const {userId} = useAuth();
  const router = useRouter()
  return (<>
  {userId ? router.push('/home') : ""}
  <div className="w-full flex-1 bg-primaryColor flex justify-between items-center gap-10 p-8">
    <div className="vector w-full h-ful flex flex-col justify-center items-center text-center gap-4">
      <h1 className="font-bold text-8xl text-transparent bg-gradient bg-clip-text">Wellcome</h1>
      <h1 className="font-bold text-3xl text-secondaryColor">Gemenin Chat-GPT Clone App</h1>
      <h1 className="font-bold text-md w-[60%] text-textColor">Here You Can Ask Any Thing and you will get an answer with
        <span className="font-black text-sm underline text-secondaryColor cursor-pointer"> Gemini AI Powered By Google </span>
        </h1>
      <motion.button className="bg-secondaryColor text-textColor rounded-lg p-4 w-[50%] font-bold text-2xl" 
        whileHover={{
          backgroundColor : "#dfdfdf",
          color :"#f36b19" ,
          transition: { duration:2,type:"spring"},
        }}
      ><Link href="/home"> Start New Chat With AI </Link></motion.button>
    </div>
    <div className="vector w-full h-full flex justify-center items-center">
      <motion.div className="h-[75%] w-[75%] relative" 
      animate={{ scale: [1,1.1] , rotate:[0,2] }}
      transition={{duration :2 ,repeatType:"reverse", repeat:Infinity}}
      >
      <Image src={Vector} alt="image" fill className="object-fill" />
      </motion.div>
    </div>
  </div>
</>
  ); 
}
