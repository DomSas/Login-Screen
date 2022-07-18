import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Signup from "./Signup";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tensor Energy</title>
        <meta name='description' content='Tensor Energy website' />
        <link rel='icon' href='/tensor-logo.ico' />
      </Head>

      <Signup />
    </div>
  );
};

export default Home;
