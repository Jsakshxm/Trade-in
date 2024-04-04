
import React from 'react';
import Image from 'next/image';
import Pile from '../../components/assets/pile.jpeg';
import Chest from '../../components/assets/chest.jpeg';
import Bag from '../../components/assets/bag.jpeg';
import Shower from '../../components/assets/shower.jpeg';



const Main = () => {
    return (
        <div className="flex flex-col items-center justify-center ">
            <h1 className="text-5xl font-bold">Store Offers</h1>
            <div className=" justify-center mt-8">
                <div className="flex  justify-center">
                    <div className="w-64 h-64 border2  mx-10 my-10">
                        <div>
                            <Image src={Pile}></Image>
                        </div>
                        <div >
                            <p className='text-center my-2 border border-solid border-black-400'>Pile Of ZetaCoins</p>
                            <p className='text-center my-2 border border-solid border-black-400'>1000 Zeta Coins</p>
                            <div  className='text-center my-2 border border-solid border-black-400' >
                            <button>₹10</button>
                            </div>
                        </div>



                    </div>
                    <div className="w-64 h-64 border2  mx-10 my-10">
                        <div>
                            <Image src={Chest}></Image>
                        </div>
                        <div >
                            <p className='text-center my-2 border border-solid border-black-400'>Pile Of ZetaCoins</p>
                            <p className='text-center my-2 border border-solid border-black-400'>1000 Zeta Coins</p>
                            <div  className='text-center my-2 border border-solid border-black-400' >
                            <button>₹10</button>
                            </div>
                        </div>


                    </div>
                    <div className="w-64 h-64 border2  mx-10 my-10">
                        <div>
                            <Image src={Bag}></Image>
                        </div>
                        <div >
                            <p className='text-center my-2 border border-solid border-black-400'>Pile Of ZetaCoins</p>
                            <p className='text-center my-2 border border-solid border-black-400'>1000 Zeta Coins</p>
                            <div  className='text-center my-2 border border-solid border-black-400' >
                            <button>₹10</button>
                            </div>
                        </div>


                    </div>

                </div>
                <div className="flex  justify-center my-20">
                    <div className="w-64 h-64 border2  mx-10 my-10">
                        <div>
                            <Image src={Shower}></Image>
                        </div>
                        <div >
                            <p className='text-center my-2 border border-solid border-black-400'>Pile Of ZetaCoins</p>
                            <p className='text-center my-2 border border-solid border-black-400'>1000 Zeta Coins</p>
                            <div  className='text-center my-2 border border-solid border-black-400' >
                            <button>₹10</button>
                            </div>
                        </div>



                    </div>


                </div>


            </div>

        </div>
      

    );
};


export default Main;