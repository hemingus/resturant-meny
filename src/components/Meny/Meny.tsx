import MenyCard from "../MenyCard/MenyCard"

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
            <ul>
                {data.map(item => 
                    <MenyCard {...item}/>
                )}
            </ul>
        </div>
    )

}