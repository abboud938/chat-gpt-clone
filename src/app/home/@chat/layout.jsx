'use client'
import { faArrowCircleUp, faFileImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

export default function Page({children}){
    const end = useRef();

    const [q,setQ] = useState();
    // useEffect(()=>{
    //     end.current.scrollIntoView({behavior : "smooth"})
    // },[end]);
    return (<>
    
        <div className=" h-full w-full overflow-y-scroll p-4 flex flex-col justify-between items-center font-semibold" style={{"scrollbarWidth" : "none"}}>
                {children}
        </div>
        {/* <div className='' ref={end}/> */}
    </>);
}