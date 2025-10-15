

export const About =()=>{
    return(
        <div className="flex items-center justify-between p-10 rounded-4xl bg-[#f2f2f2] mt-7 mb-16">
            <div className="flex flex-col items-start">
                <span className="font-[Inter] font-black text-[128px] text-[#222733]">собака</span>
                <p className="font-[Montserrat] font-semibold text-x1 w-[680px] ">Домашнеее животное из сем. хищных млекопитающий, к к-рому относятся также волк, лисица и др.</p> 
            </div>
            <div>
                <img src="./3.jpg" className="rounded-4xl w-[370px]" />
            </div>
            
        </div>

    )
}