import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Photo from "../../components/assets/profile.png";
import batch_1 from "../../components/assets/batch-1.jpg";
import batch_2 from "../../components/assets/batch -2.png";
import batch_3 from "../../components/assets/batch-3.png";
import batch_4 from "../../components/assets/batch-4.png";
import batch_5 from "../../components/assets/batch-5.png";
import Image from "next/image";
const Main = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <>
        <div className="flex w-90 h-72  border-2 bg-color mx-10 my-10 justify-evenly">
          <div className="flex w-72 h-40 border-2 bg-red-400 mx-10 my-10">
            <div className="flex justify-evenly p-2 mx-3 my-5">
              <div className="w-20 h-20 border-white mx-3 my-3">
                <Image src={Photo} alt="" />
              </div>
              <div className="mx-4 my-3">
                <p> Name</p>
                <p>Email</p>
                <p>Balance 3000</p>
              </div>
            </div>
            <div></div>
          </div>
          <div className=" text-center  w-64 h-20 border-2 bg-red-400 mx-10 my-10 ">
            <h2 className="text-center px-2 ml-12">Leaderboard</h2>
            <div>
              <ul className="flex justify-evenly">
                <li className="flex ">Name</li>
                <li className="flex">profit</li>
              </ul>
            </div>
            <br />
            <div className="">
              <div>
                <ul className="flex justify-evenly">
                  <li className="flex ">Name</li>
                  <li className="flex">Profit</li>
                </ul>
              </div>
              <div>
                <ul className="flex justify-evenly">
                  <li className="flex">Name</li>
                  <li className="flex">Profit</li>
                </ul>
              </div>
              <div>
                <ul className="flex justify-evenly">
                  <li className="flex ">Name</li>
                  <li className="flex">Profit</li>
                </ul>
              </div>
            </div>
          </div>
          <div className=" text-center  w-64 h-20 border-2 bg-red-400 mx-10 my-10 ">
            <h2 className="text-center px-2 ml-12">Leaderboard</h2>
            <div>
              <ul className="flex justify-evenly">
                <li className="flex ">Name</li>
                <li className="flex">ed-profit</li>
              </ul>
            </div>
            <br />
            <div className="">
              <div>
                <ul className="flex justify-evenly">
                  <li className="flex ">Name</li>
                  <li className="flex">Profit</li>
                </ul>
              </div>
              <div>
                <ul className="flex justify-evenly">
                  <li className="flex">Name</li>
                  <li className="flex">Profit</li>
                </ul>
              </div>
              <div>
                <ul className="flex justify-evenly">
                  <li className="flex ">Name</li>
                  <li className="flex">Profit</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="w-90 h-72 border-2 bg-red-400 mx-10 my-10 justify-center items-center">
          <div>
            <h3 className="text-center">batches</h3>
          </div>
          <div className="flex justify-center mt-5 px-5">
            <div className="flex items-center">
              <div className="w-32 h-32 mx-2">
                <Image src={batch_1} alt="" />
              </div>
              <div className="w-32 h-32 mx-2">
                <Image src={batch_2} alt="" />
              </div>
              <div className="w-32 h-32 mx-2">
                <Image src={batch_3} alt="" />
              </div>
              <div className="w-32 h-32 mx-2">
                <Image src={batch_4} alt="" />
              </div>
              <div className="w-32 h-32 mx-2">
                <Image src={batch_5} alt="" />
              </div>
            </div>
          </div>
        </div>
      </>

      {/* <Footer /> */}
    </div>
  );
};

export default Main;
