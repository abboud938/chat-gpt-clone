'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp, faFileImage } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
export default function Layout ({children , sideNav, chat}){
    const queryClient = new QueryClient()
    return(<>
    <QueryClientProvider client={queryClient}>
        <div className="h-full w-full flex gap-0 justify-between items-center overflow-hidden">
            {sideNav}
            <div className="flex flex-col justify-center items-center gap-4 p-1 bg-primaryColor bg-opacity-80 flex-1 h-full">
                
                {chat}
            </div>
        </div>
    </QueryClientProvider>
    </>)
}