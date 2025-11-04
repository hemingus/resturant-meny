import "./MenyCard.css"

interface MenyCardProps {
    tittel: string
    pris: string
    ingredienser: string
    kategori: string
}

export default function MenyCard({tittel, pris, ingredienser, kategori}: MenyCardProps) {
    return <div className="meny-card">
        <h2>{tittel}</h2>
        <p>{pris}</p>
        <p>{ingredienser}</p>
        <p>{kategori}</p>
    </div>
}