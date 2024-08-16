import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return <div className="mt-6 md:mt-2 w-full h-full flex justify-center"><SignIn/></div>;
}