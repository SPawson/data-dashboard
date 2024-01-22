"use client";
import { Avatar, Button } from "@mui/material";
import { useSession, signIn, signOut } from "next-auth/react";

const Login = () => {
  const { data: session } = useSession();
  const userName = session?.user?.name;
  const avatarUrl = session?.user?.image;

  if (session) {
    return (
      <>
        <Button variant={"contained"} color={"error"} onClick={() => signOut()}>
          Sign Out
        </Button>
      </>
    );
  } else {
    return (
      <>
        <h2>Please Login</h2>
        <Button
          variant={"contained"}
          color={"success"}
          onClick={() => signIn()}
        >
          Sign In
        </Button>
      </>
    );
  }
};

export default Login;
