"use client";
import Dashboard from "./dashboard/page";
import SideMenu from "@/components/sidemenu/SideMenu";
import Login from "@/components/login/Login";
import { useSession } from "next-auth/react";
import style from "./Home.module.scss";

const Home = () => {
  const { data: session } = useSession();
  return (
    <main className={style.main}>
      {session && (
        <>
          <SideMenu />
          <Dashboard />
        </>
      )}
      <Login />
    </main>
  );
};

export default Home;
