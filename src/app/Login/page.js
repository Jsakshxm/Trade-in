"use client";
import React, { useEffect } from "react";
import { useState, useContext } from "react";
import supabase from "../supabase";
// import { AppContext } from "@components/AppContext/AppContext";

// import { Environment, OrbitControls } from "@react-three/drei";
// import { Redirect } from 'react-router-dom';

// import { Environment, OrbitControls } from "@react-three/drei";
// import { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import Bus from "../Bus";
// import { TextureLoader } from "three/src/loaders/TextureLoader";
// import Car from "../Car";
// import Navbar from "../Components/Navbar";
import Navbar from "@/components/Navbar/Navbar";
// import { Link } from "react-router-dom";
import Link from "next/link";

const page = () => {
  // const colorMap = useLoader(TextureLoader, 'standard_baseColor.png')
  // const { email, setemail } = useContext(AppContext);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [passwordt, setpasswordt] = useState("password");
  const [password1, setpassword1] = useState("");
  const [name, setname] = useState("");

  const [register, setregister] = useState(false);

  const handleinvite = async (e) => {
    e.preventDefault();
    let person = prompt("Please enter email id", "abc@gmail.com");
    let { data, error } = await supabase.auth.admin.inviteUserByEmail(person);
    if (error) {
      console.log(error);
    }
    if (data) {
      alert("Invited successfully");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      let { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      if (data) {
        setemail(data.user.email);
        console.log(data);
        window.location.href = "/";
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const registerbutton = (e) => {
    e.preventDefault();
    setregister(!register);
  };

  async function signUpNewUser(e) {
    e.preventDefault();
    if (password === password1) {
      let { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });
      if (error) {
        // seterror1("Error");
        // seterrors(error.message);
        // seterrorimg(wrongtick);
        // openPopup()
        alert(error.message);
        console.log(error);
      } else {
        alert("Verification link sent to your email");
        const { data, error } = await supabase
          .from("UserData")
          .insert([{ email: email, balance: 2000000, Name: name }])
          .select();
        if (error) {
          console.log(error);
        } else {
          console.log("user data uploaded successfully");
        }
      }
    } else {
      alert("Passwords do not match");
    }
  }
  const forgtpassword = async (e) => {
    let { data, error } = await supabase.auth.resetPasswordForEmail(email);
    if (error) {
      alert(error.code);
    }
    if (data) {
      alert(data.message);
    }
  };
  const passwordtoggle = () => {
    if (passwordt === "password") {
      setpasswordt("text");
    } else {
      setpasswordt("password");
    }
  };

  // const password1toggle=()=>{
  //   if(password1t==="password"){
  //     setpassword1t("text");
  //   }
  //   else{
  //     setpassword1t("password");
  //   }
  // }

  // useEffect(() => {}, []);

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 bg-gray-200 h-screen w-full justify-center items-center">
        <div className="h-52 max-w-[80%] lg:h-[500px] lg:w-[500px] "></div>

        <div className="flex items-center justify-center w-full">
          <div className=" bg-gray-100 w-80 rounded-lg felx felx-col items-center justify-center text-center shadow-lg p-4 top-1/2 left-1/2">
            <h1>Login</h1>
            <form action="">
              <div className="flex flex-col">
                <input
                  className="my-2 p-2"
                  type="email"
                  placeholder="Email"
                  name=""
                  id=""
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                />
                <div className="my-2 relative bg-white flex justify-center items-center">
                  <input
                    className="p-2 grow"
                    type={passwordt}
                    name=""
                    placeholder="Password"
                    id=""
                    onChange={(e) => {
                      setpassword(e.target.value);
                    }}
                  />
                  {passwordt == "password" ? (
                    <i
                      className="fa-solid fa-eye-slash bg-white mr-2"
                      onClick={passwordtoggle}
                    ></i>
                  ) : (
                    <i
                      className="fa-solid fa-eye mr-2"
                      onClick={passwordtoggle}
                    ></i>
                  )}
                </div>
                {register && (
                  <>
                    <div className="my-2 relative bg-white flex justify-center items-center">
                      {/* {setpassword1 &&} */}
                      <input
                        className=" p-2 grow"
                        type={passwordt}
                        name=""
                        placeholder="Confirm Password"
                        id=""
                        onChange={(e) => {
                          setpassword1(e.target.value);
                        }}
                      />
                      {passwordt == "password" ? (
                        <i
                          className="fa-solid fa-eye-slash bg-white mr-2"
                          onClick={passwordtoggle}
                        ></i>
                      ) : (
                        <i
                          className="fa-solid fa-eye mr-2"
                          onClick={passwordtoggle}
                        ></i>
                      )}
                    </div>
                    <div className="my-2 relative bg-white flex justify-center items-center">
                      <input
                        className=" p-2 grow"
                        type="text"
                        name=""
                        placeholder="Your Name"
                        id=""
                        onChange={(e) => {
                          setname(e.target.value);
                        }}
                      />
                    </div>
                  </>
                )}
                {!register && (
                  <button
                    className=" my-2 bg-red-400 rounded-lg p-2"
                    onClick={handleLogin}
                  >
                    Login
                  </button>
                )}
                <button
                  className="my-2 bg-red-400 rounded-lg p-2"
                  onClick={handleinvite}
                >
                  Invite friends
                </button>

                {!register && (
                  <a href="" className="underline" onClick={registerbutton}>
                    Register?
                  </a>
                )}
                {!register && (
                  <a href="" className="underline" onClick={forgtpassword}>
                    Fogot Password?
                  </a>
                )}
                {register && (
                  <button
                    className=" my-2 bg-red-400 rounded-lg p-2"
                    onClick={signUpNewUser}
                  >
                    SignUp
                  </button>
                )}
                {register && (
                  <a href="" className="underline" onClick={registerbutton}>
                    Go back
                  </a>
                )}
              </div>
            </form>
            {/* <div className=''>
      </div> */}
          </div>
        </div>

        <div className="h-52 max-w-[80%] lg:h-[500px] lg:w-[500px] ">
          {/* <Canvas>
          <ambientLight />
          <Environment preset="forest" />
          <Suspense fallback={null}>
            <OrbitControls autoRotate autoRotateSpeed={10} />
            <Car />
          </Suspense>
        </Canvas> */}
        </div>
      </div>
    </>
  );
};

export default page;
