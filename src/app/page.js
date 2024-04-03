import Image from "next/image";
import Navbar from "../components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
// import AppContext from "@/components/AppContext/AppContext";
// import { useContext } from "react";

export default function Home() {
  // const {theme,settheme}=useContext(AppContext);
  return (
    <main >
      <Navbar></Navbar>
      <div className={`pt-10 bg`}>

      </div>
      <Footer></Footer>
    </main>
  );
}
