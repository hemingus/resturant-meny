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

type Kategori = "Hovedrett" | "Forrett" | "Dessert";

export default function Meny({ data }: MenyProps) {
    const hovedretter = data.filter(item => item.kategori === "Hovedrett")
    console.log(hovedretter)
    const forretter = data.filter(item => item.kategori === "Forrett")
    console.log(forretter)
    const desserter = data.filter(item => item.kategori === "Forrett")
    console.log(desserter)

    return (
        <div className="meny-container">
            <h2>Forretter</h2>
            <ul className="meny-list">
                {forretter.map(item => 
                    <MenyCard key={item.id} {...item}/>
                )}
            </ul>
            <h2>Hovedretter</h2>
            <ul className="meny-list">
                {hovedretter.map(item => 
                    <MenyCard key={item.id} {...item}/>
                )}
            </ul>
            <h2>Desserter</h2>
            <ul className="meny-list">
                {desserter.map(item => 
                    <MenyCard key={item.id} {...item}/>
                )}
            </ul>
        </div>
    )
}