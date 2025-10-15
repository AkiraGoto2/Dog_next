import Image from "next/image"
import PicImage from "../public/Card_dog(1).png"

export const Card=()=>{
    return(
        <div>
            <Image src={PicImage} alt="1"/>
        </div>
    )
}