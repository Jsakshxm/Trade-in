"use client"
import React from 'react';
import Image from 'next/image';
import Pile from '../../assets/pile.jpeg';
import Chest from '../../assets/chest.jpeg';
import Bag from '../../assets/bag.jpeg';
import Shower from '../../assets/Shower.jpeg';
import Navbar from '@/components/Navbar/Navbar';



const Main = () => {
    return (
        <>
        <Navbar></Navbar>
        <div className="flex flex-col items-center justify-center pt-32">
            <h1 className="text-5xl font-bold">Store Offers</h1>
            <div className=" justify-center mt-8">
                <div className="flex  justify-center">
                    <div className="w-64 h-64 border2  mx-10 my-10">
                        <div>
                            <Image src={Pile} width={300} height={300} alt='Pile of zeta coins'></Image>
                        </div>
                        <div >
                            <p className='text-center my-2 border border-solid border-black-400'>Pile Of ZetaCoins</p>
                            <p className='text-center my-2 border border-solid border-black-400'>10000 Zeta Coins</p>
                            <div  className='text-center my-2 border border-solid border-black-400' >
                            <button>₹10</button>
                            </div>
                        </div>



                    </div>
                    <div className="w-64 h-64 border2  mx-10 my-10">
                        <div>
                            <Image src={Chest} width={300} height={300} alt='Chest of Zeta coins'></Image>
                        </div>
                        <div >
                            <p className='text-center my-2 border border-solid border-black-400'>Chest Of ZetaCoins</p>
                            <p className='text-center my-2 border border-solid border-black-400'>100000 Zeta Coins</p>
                            <div  className='text-center my-2 border border-solid border-black-400' >
                            <button>₹100</button>
                            </div>
                        </div>


                    </div>
                    <div className="w-64 h-64 border2  mx-10 my-10">
                        <div>
                            <Image src={Bag} width={300} height={300} alt='Bag of zeta coins'></Image>
                        </div>
                        <div >
                            <p className='text-center my-2 border border-solid border-black-400'>Bag Of ZetaCoins</p>
                            <p className='text-center my-2 border border-solid border-black-400'>100000 Zeta Coins</p>
                            <div  className='text-center my-2 border border-solid border-black-400' >
                            <button>₹500</button>
                            </div>
                        </div>


                    </div>

                </div>
                <div className="flex  justify-center my-20">
                    <div className="w-64 h-64 border2  mx-10 my-10">
                        <div>
                            <Image src={Shower} width={300} height={300} alt='Shower of zeta coins'></Image>
                        </div>
                        <div >
                            <p className='text-center my-2 border border-solid border-black-400'>Shower Of ZetaCoins</p>
                            <p className='text-center my-2 border border-solid border-black-400'>1000000 Zeta Coins</p>
                            <div  className='text-center my-2 border border-solid border-black-400' >
                            <button>₹1000</button>
                            </div>
                        </div>



                    </div>


                </div>


            </div>

        </div>
      
        </>
    );
};


export default Main;