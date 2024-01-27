'use client';
import React from "react";

import FileUpload from "@/Components/ImageUpload";
import { useState } from "react";
import { Step2PUT } from "@/API/Registration";
import { MdAttachMoney } from "react-icons/md";



const Step4 = () => {
return (
    <div className="flex flex-col items-center justify-center">
        
        <div className="my-20">
            <div className="pb-10">
                <text className="text-2xl font-bold ">10. Decide if you want to negotiate</text>
            </div>
            <div className="flex items-center justify-center border-2 border-black rounded-lg p-6 ">
                <div className="">
                        <text className="text-xl font-bold ">Enable negotiation with client</text>
                        <br></br>
                        <text className="text-lg text-gray-400 font-bold pl-10">Client can offer different</text>
                </div>
                <div className="pl-10">
                    <MdAttachMoney className="text-4xl text-center" />
                </div>

                <div className="pl-8">
                    <input type="checkbox" className="w-7 h-7">
                    </input>
                </div>

            </div>
        </div>



        <div className="pl-20 my-20">
            <div className="pb-10">
                <text className="text-2xl font-bold ">11. Do you have any of these security features?</text>
            </div>
            <div className="flex  justify-between p-2 w-96">
                <div className="">
                        <text className="text-xl font-bold ">24/7 Security</text>
                </div>
                <div className="pl-8">
                    <input type="checkbox" className="w-7 h-7">
                    </input>
                </div>

            </div>
            <div className="flex  justify-between p-2 w-96">
                <div className="">
                        <text className="text-xl font-bold ">Security camera</text>
                </div>
                <div className="pl-8">
                    <input type="checkbox" className="w-7 h-7">
                    </input>
                </div>

            </div>
        </div>


        <div className="my-20 border-2 border-black rounded-lg p-6">
            <div className="">
                <text className="text-xl font-bold ">Now, set your price</text>
                <br></br>
                <text className="text-lg text-gray-400 font-bold pl-10">You can change it anytime.</text>
            </div>
            <div className="">
                <textarea  className="mr-24 mt-4 border-2 border-black rounded text-6xl" rows="1" cols="10" type="number" placeholder="Price"></textarea>
            </div>
        </div>
        <div className="my-20 border-2 border-black rounded-lg p-6">
            <div className="">
                <text className="text-xl font-bold ">Feeling generous? Set a discount percentage.</text>
                <br></br>
                <text className="text-lg text-gray-400 font-bold pl-10">You can change it anytime.</text>
            </div>
            <div className="">
                <textarea  className="mt-4 border-2 border-black rounded text-6xl" rows="1" cols="10" type="number" placeholder="Discount %"></textarea>
            </div>
        </div>



            



        

        

    </div>
);




};

export default Step4;
