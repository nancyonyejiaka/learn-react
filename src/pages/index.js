// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from "@/styles/Home.module.css";
import Profile from "./qcomps/profile_mistake.js";
import PropProfile from "./components/profile_props.js";
import FirstComp from "./qcomps/firstcomp.js";
import Bio from "./qcomps/bios.js";
import Todo from "./qcomps/todos.js";
import Gallery from "./qcomps/gallery_props.js";
import PackingList from "./qcomps/props_item.js";

export default function Home() {
  return (
    <div className={styles.main}>
      <PackingList />
      <Gallery />
      <PropProfile />
      <Todo/>
      <Bio />
      <Profile />
      <FirstComp />
    </div>
  );
}
