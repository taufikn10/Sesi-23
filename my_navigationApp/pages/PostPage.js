import { StatusBar } from "expo-status-bar";
import React from "react";
import Header from "./postComp/Header";
import Posts from "./postComp/Posts";

export default function PostPage() {
  return (
    <>
      <Header />
      <Posts />
      <StatusBar style="auto" />
    </>
  );
}
