import "./MenyCard.css"

interface MenyCardProps {
    tittel: string
    pris: string
    ingredienser: string
    kategori: string
}

export default function MenyCard({tittel, pris, ingredienser, kategori}: MenyCardProps) {
    return <div className="meny-card">
        
        <h3>{tittel}</h3>
        
        <p>{ingredienser}</p>
        <p>{pris}</p>
        <h4>{kategori}</h4>
    </div>
}