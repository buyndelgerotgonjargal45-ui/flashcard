"use client";
import { useState } from "react";
import{ useRouter } from "next/navigation";
// import { UserContext } from "./_providers/UserContext";
// import { useContext } from "react";
export default function Home() {
  const router = useRouter();
  // const { user } = useContext(UserContext);
  // console.log(user);
  return <div>Home page</div> 
   
}