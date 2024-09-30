import "./ConceptCard.css"

export default function ConceptCard({name,content}) {
    return (
        <div className="card">
            <h3>{name}</h3>
            <p>{content}</p>
        </div>
    )
}