export function KnowledgeCard({ tech }) {
    return(
        <div className="col-12">
            <h6 id="knowledge">{tech.description}</h6>
        </div>
    );
}