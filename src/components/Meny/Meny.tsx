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
        <section className="meny-container">
            <div className="meny-list">
                <h2>Hovedretter</h2>
                <ul className="meny-list">
                    {data.filter(item => item.kategori === "Hovedrett").map(item =>
                        <MenyCard key={item.id} {...item}/>
                    )}
                </ul>
            </div>
            <div className="meny-list">
                <h2>Forretter</h2>
                <ul className="meny-list">
                    {data.filter(item => item.kategori === "Forrett").map(item =>
                        <MenyCard key={item.id} {...item}/>
                    )}
                </ul>
                <h2>Desserter</h2>
                <ul className="meny-list">
                    {data.filter(item => item.kategori === "Dessert").map(item =>
                        <MenyCard key={item.id} {...item}/>
                    )}
                </ul>
            </div>
        </section>
    )
}