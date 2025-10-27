import {Card} from "../shared/card"
import { Title } from "../shared/ui"

const breedsList = [
    {src:"affenpinscher"},
    {src:"labradoodle"},
    {src:"eskimo"},
    {src:"shihtzu"},
    {src:"hound"},
    {src:"borzoi"},
    {src:"mix"},
    {src:"lhasa"},
    {src:"pug"},
    {src:"shiba"},
]

export const Porodid = () => {
    return(
        <div className="my-16">
            <Title children="Breeds" />
                <div className="mt-7 flex flex-wrap items-start gap-2.5 w-[1360px]">
                    {breedsList.map((item, i)=>{
                        return <Card key={i} breed={item.src}/>
                    })}
                </div>
        </div>
    )
}