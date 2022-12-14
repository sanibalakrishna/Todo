import Head from "next/head";
import Script from "next/script";
import Sidebar from "../components/Sidebar";

import { useState } from "react";
import Mainpart from "../components/Mainpart";
import Addtask from "../components/Addtask";

export default function Home() {
  const [sidebar, setSidebar] = useState(true);
  const handleSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <div data-theme="light" className="h-screen w-screen">
      <Head>
        <title>Todo-X</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-row w-screen">
        <div>
          <Sidebar onsidebar={handleSidebar} sidebar={sidebar} />
        </div>

        <div
          className={
            sidebar ? "fixed left-48 h-screen" : "fixed  h-screen w-full"
          }
        >
          <Mainpart onsidebar={handleSidebar} sidebar={sidebar} />
        </div>
      </main>
    </div>
  );
}
