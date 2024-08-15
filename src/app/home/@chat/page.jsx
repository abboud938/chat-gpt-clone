"use client";
import { delay, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faImages,
  faQuestionCircle,
  faArrowCircleUp,
  faFileImage,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export default function Page() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const mutation = useMutation({
    mutationFn: () => {
      return fetch("../../api/chats", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ chatDefaultName: "No Title Chat" }),
      }).then((res) => res.json());
    },
    onSuccess: (id) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["chatList"] });
      router.push(`/home/${id}`);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    mutation.mutate();
  };
  return (
    <>
      <div className="w-[75%] h-full flex self-center justify-center items-center gap-20">
        <motion.div
          className="w-[150px] h-[150px] flex flex-col justify-between items-center rounded-xl bg-opacity-50 bg-primaryColor shadow-xl"
          animate={{ rotate: [-2, 2] }}
          transition={{ duration: 2, repeatType: "reverse", repeat: Infinity }}
          whileHover={{ backgroundColor: "#1f1f23" }}
        >
          {/* VECTOR */}
          <FontAwesomeIcon
            icon={faQuestionCircle}
            className="text-secondaryColor self-start p-3 w-[25px] h-[25px]"
          />
          <h1 className="text-textColor uppercase text-base p-3">
            {" "}
            Answering Your Questions{" "}
          </h1>
          {/* TEXT */}
        </motion.div>
        <motion.div
          className="w-[150px] h-[150px] flex flex-col justify-between items-center rounded-xl bg-opacity-50 bg-primaryColor shadow-xl"
          animate={{ rotate: [-2, 2] }}
          transition={{ duration: 2,repeatType: "reverse", repeat: Infinity }}
          whileHover={{ backgroundColor: "#1f1f23"  }}
        >
          {/* VECTOR */}
          <FontAwesomeIcon
            icon={faCode}
            className="text-secondaryColor self-start p-3 w-[25px] h-[25px]"
          />
          <div className="text-textColor uppercase text-base p-3">
            {" "}
            Writing Code{" "}
          </div>
          {/* TEXT */}
        </motion.div>
        <motion.div
          className="w-[150px] h-[150px] flex flex-col justify-between items-center rounded-xl bg-opacity-50 bg-primaryColor shadow-xl"
          animate={{ rotate: [-2, 2] }}
          transition={{ duration: 2, repeatType: "reverse", repeat: Infinity }}
          whileHover={{ backgroundColor: "#1f1f23" }}
        >
          {/* VECTOR */}
          <FontAwesomeIcon
            icon={faImages}
            className="text-secondaryColor self-start p-3 w-[25px] h-[25px]"
          />
          <div className="text-textColor uppercase text-base p-3">
            SCANING Images
          </div>
          {/* TEXT */}
        </motion.div>
      </div>
      <div className="flex justify-center items-center h-[10%] bg-secondaryColor w-[25%] rounded-2xl p-3">
          <button className="" onClick={handleSubmit}>
            Start Chat
          </button>
      </div>
    </>
  );
}
