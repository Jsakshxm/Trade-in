"use client";
import React, { useContext } from 'react';
import Navbar from '@/components/Navbar/Navbar';
// import Chart from './Chart';
import Footer from '@/components/Footer/Footer';
import { AppContext } from "../../components/AppContext/AppContext";

const Page = () => {
  const { theme, setTheme } = useContext(AppContext);

  return (
    <div>
      <Navbar />
      <div className={`pt-36 bg-${theme}bg text-${theme}txt min-h-screen`}>
        {/* <Chart /> */}
      </div>
      <Footer />
    </div>
  );
};

export default Page;
