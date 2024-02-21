import React from "react";
import Image from "next/image";
import Map from "@/Components/HostSide/Map";



export default function Test() {



    return (
        <div className="flex flex-col">
            <div className="flex justify-center">
                    <h1 className="text-center">Test</h1>
            </div>
            <div className="flex justify-center ">
                <div className="w-10/12">
                    
                    <Map/>
                
                
                </div>
                    
                
            </div>
        </div>
    );

}
