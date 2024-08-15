import { Html, Head, Main, NextScript } from "next/document";
import logo from "./favicon.ico";
export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <body>
        <Main></Main>
        <NextScript></NextScript>
      </body>
    </Html>
  );
}
