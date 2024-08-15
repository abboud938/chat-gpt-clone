'use client'
import {motion} from "framer-motion"
export default function Loader(){
    return(<>
        <div className="bg-primaryColor flex justify-center items-center w-full h-[90%]">
            <motion.div className='w-[50px] h-[50px] bg-secondaryColor rounded-full'
            animate={{scale:[1,1.4]}}
            transition={{repeatType:"reverse", repeat:Infinity , type:"spring"}}
            />
        </div>
    </>)
}