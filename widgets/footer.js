import {Header} from "./header"

export const Footer = ()=>{
    return(
        <div className="text-center flex flex-col gap-6">
            <Header />
            <span className="text-gray-600 mt-10">
                Авдиенко Варя 2025
            </span>
        </div>
    )
}