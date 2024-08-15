import { Inter } from "next/font/google";
import { ClerkLoaded, ClerkLoading, ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { dark } from "@clerk/themes";
import Navbar from "./components/navbar";
import Loader from "./components/loader";
const inter = Inter({ subsets: ["vietnamese"] });

export const metadata = {
  title: "Chat-GPT Clone ",
  description: "Generated by Abboud Abboud",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          baseTheme: dark,
        }}
        afterSignOutUrl="/"
      >
        <body>
          <div className="h-screen w-full flex flex-col justify-start items-center">
            <Navbar />
            <ClerkLoading>
              <Loader />
            </ClerkLoading>
            <ClerkLoaded>{children}</ClerkLoaded>
          </div>
        </body>
      </ClerkProvider>
    </html>
  );
}
