interface MenyCardProps {
    tittel: string
    pris: string
    ingredienser: string
    kategori: string
}

export default function MenyCard({tittel, pris, ingredienser, kategori}: MenyCardProps) {
    return <div>
        <h2>{tittel}</h2>
        <p>{pris}</p>
        <p>{ingredienser}</p>
        <p>{kategori}</p>
    </div>
}