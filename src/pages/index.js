// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from "@/styles/Home.module.css";
import Form from "src/pages/components/queueUpdates.js";

export default function Home() {
  return (
    <div className={styles.main}>
      <Form />
    </div>
  );
}
