'use client'
import Image from "next/image";
import placeholder from "../public/loading.jpg";
import { useState, useEffect } from "react";

export const Card=({breed})=>{
    const [imageSrc, setImageSrc] = useState(placeholder);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const fetchImage = async () =>{
            try{
                const response = await fetch
                (`https://dog.ceo/api/breed/${breed}/images/random`);
                const data = await response.json();
                setImageSrc(data.message);
            } catch (error) {
                console.error('Error', error);
            } finally{
                setLoading(false);
            }
        };

        fetchImage();
    }, []);

    return(
        <div className=" w-[263px] h-[189px]">
            <Image className="rounded-[50px] w-[263px] h-[189px] border border-indigo-600" src={imageSrc} height={189} width={263} alt="Sobaka"/>
        </div>
    )
}
