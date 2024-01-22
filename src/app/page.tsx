"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Dashboard from "./dashboard/page";
import Header from "@/components/header/Header";
import SideMenu from "@/components/sidemenu/SideMenu";
import Login from "@/components/login/Login";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <main className={styles.main}>
      <Header />
      {session && (
        <>
          <SideMenu />
          <Dashboard />
        </>
      )}
      <Login />
    </main>
  );
}
