'use client'
import {motion} from "framer-motion"
import ReactMarkdown  from "react-markdown";
export default function ChatBubble({message ,role}){
    return ( <>
    {
            role === 'user' ? 
            (
            <motion.div className='bg-secondaryColor text-textColor rounded-3xl self-end text-right p-3 w-[80%] text-wrap'
            initial={{opacity:0 , scale:0.8}}
            animate={{opacity:1 , scale:1}}
            >
                <ReactMarkdown >{message}</ReactMarkdown>
            </motion.div>   
            )
            : (<>
            
            <div className="flex justify-between items-center rounded-3xl  text-right p-3 w-[80%]  text-wrap" >
                <motion.div className= "text-textColor text-left w-full rounded-3xl bg-primaryColor bg-opacity-50 p-3" 
                initial={{opacity:0 , scale:0.8}}
                animate={{opacity:1 , scale:1}}> <ReactMarkdown >{message}</ReactMarkdown></motion.div>
            </div>
            </> )
    }
</>)
} 