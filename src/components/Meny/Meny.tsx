import MenyCard from "../MenyCard/MenyCard"
import "./Meny.css"

type MenuItem = {
    id: number,
    tittel: string,
    pris: string,
    ingredienser: string,
    kategori: string,
}

interface MenyProps {
    data: Array<MenuItem>
}

export default function Meny({ data }: MenyProps) {
    return (
        <div>
            <ul className="meny-list">
                {data.map(item => 
                    <MenyCard key={item.id} {...item}/>
                )}
            </ul>
        </div>
    )
}