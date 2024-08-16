"use client";
import Link from "next/link";
import SideNavLink from "../../components/sideNavLink";
import {
  faAdd,
  faArrowCircleRight,
  faEdit,
  faNetworkWired,
  faQuestionCircle,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import {motion,AnimatePresence} from "framer-motion"
export default function SideNav() {
  const queryClient = useQueryClient();
  const pathname = usePathname();
  const router = useRouter();
  const [showSideNav,setShowSideNave] = useState(false)
  const { error, data, isLoading } = useQuery({
    queryKey: ["chatList"],
    queryFn: () => fetch("../../api/chats").then((res) => res.json()),
  });
  const mutation = useMutation({
    mutationFn: (chatid) =>
      fetch(`../../api/chats/${chatid}`, {
        method: "DELETE",
      }).then((res)=>{res.json()}),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["chatList"] }).then(()=>{
      });
      router.push(`/home`);
    },
  });
  const handleShowSideNave = (e)=>{
    e.preventDefault();
    setShowSideNave(!showSideNav)
  }
  return (
    <>
      <div className={`bg-primaryColor md:w-80 ${showSideNav ? "flex" : "hidden"} h-full md:flex flex-col justify-start items-start gap-4 p-4 md:static absolute top0- left-0`}
      >
        {/* STATIC LINKS */}
        <div className="w-full text-textColor flex flex-col gap-3 justify-start items-start">
          <SideNavLink
            link="/"
            title="Explore Gemini AI"
            icon={faQuestionCircle}
          />
          <SideNavLink link="/" title="About Gemini" icon={faNetworkWired} />
          <SideNavLink link="/home" title="Start New Chat" icon={faAdd} />
        </div>
        <hr className=" w-full opacity-50" />
        {/* CHAT HISTORY */}
        <div
          className="h-[78%] overflow-y-scroll w-full text-textColor flex flex-col gap-3 justify-start items-start"
          style={{ scrollbarWidth: "none" }}
        >
          <h1 className="font-bold">Chat History</h1>
          {/* <Link href="/home/123">chat 1</Link> */}
          {isLoading ? (
            <>
              <span className="text-secondaryColor">Loading chats ...</span>
            </>
          ) : error ? (
            <div>{error.message}</div>
          ) : data && data.length ? (
            data?.map((chat) => {
              let chatid = chat._id;
              return (
                <>
                  <div className="w-full p-1 flex gap-4">
                    <Link
                      href={`/home/${chatid}`}
                      key={chat._id}
                      className={`flex-1 ${
                        pathname?.split("/").pop() === chatid
                          ? "text-secondaryColor"
                          : ""
                      }`}
                      contentEditable={false}
                    >
                      {chat.title}
                    </Link>
                    <button>
                      <FontAwesomeIcon
                        icon={faEdit}
                        className="w-[15px] h-[15px] text-secondaryColor"
                      />
                    </button>
                    <button>
                      <FontAwesomeIcon
                        icon={faTrash}
                        className="w-[15px] h-[15px] text-secondaryColor "
                        onClick={() => {
                          mutation.mutate(chatid);
                        }}
                      />
                    </button>
                  </div>
                </>
              );
            })
          ) : (
            <>
              <div className="text-textColor opacity-50">No Chats Found</div>
              {router.push("/home")}
            </>
          )}
        </div>
        <hr className=" w-full opacity-50" />
      </div>
      <button className="absolute left-1 md:hidden" onClick={handleShowSideNave}>
      <FontAwesomeIcon icon={faArrowCircleRight} className="w-[30px] h-[30px] text-secondaryColor"/>
    </button>
    </>
  );
}
