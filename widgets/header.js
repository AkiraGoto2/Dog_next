import { Link } from "../shared/ui"
import { Logo } from "../shared/ui"

const links=[
    {links: "#", children: "Что такое собака"},
     {links: "#", children: "Интересные факты"},
      {links: "#", children: "Породы"},
       {links: "#", children: "Сгенерировать"},
    ]

export const Header = ()=>{
    return(
        <div className="flex bg-[#4d86ff] w-screen rounded-full items-center justify-between px-9 py-5">
            <Logo />
            <nav className="flex items-center gap-14">
                {links.map((item, i)=>{
                    return <Link key={i} link={item.links} children={item.children}/>
                }
            )}
            </nav>
        </div>
    )
}