import React, { useState } from "react";
import { type NextPage } from "next";
import Head from "next/head";

import Hero from "../components/Home/Hero";
import Collection from "../components/Home/Collection";
import Provide from "../components/Home/Provide";
import Workings from "../components/Home/Workings";
import Footer from "../components/Home/Footer";
import Navbar from "../components/UI/Navbar";

const Home: NextPage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar setShowModal={setShowModal} showModal={showModal} />

      <main className="container mx-auto min-h-screen  w-full max-w-8xl bg-lightCream">
        <Hero />
        {!showModal && (
          <>
            <Collection />
            <Provide />
            <Workings />
          </>
        )}
      </main>
      {!showModal && (
        <div className="">
          <Footer />
        </div>
      )}
    </>
  );
};

export default Home;
