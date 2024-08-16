import {
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/logo.png";
export default function Navbar() {
  return (
    <>
      <nav className="bg-primaryColor text-white h-[10vh] w-full flex justify-between items-center gap-10 ">
        <div className="Logo w-[50%] h-full flex justify-center items-center">
          <Link href="/" className="md:w-[50px] md:h-[50px] w-[30px] h-[30px] relative">
            <Image src={Logo} fill className="object-fill" />
          </Link>
        </div>
        <div className=" w-[50%] h-full flex justify-center items-center ">
          <SignedIn >
            <ClerkLoading>
              <div
                className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
                role="status"
              >
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"></span>
              </div>
            </ClerkLoading>
            <UserButton showName={true} />
          </SignedIn>

          <SignedOut >
            <SignInButton />
          </SignedOut>
        </div>
      </nav>
    </>
  );
}
