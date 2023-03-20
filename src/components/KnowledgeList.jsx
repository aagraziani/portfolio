import { useState, useEffect } from "react";
import { knowledge as data } from "../data/knowledge";
import { KnowledgeCard } from "./KnowledgeCard";

function ExperienceList() {
  const [knowledge, setKnowledge] = useState([]);

  useEffect(() => {
    setKnowledge(data);
  }, []);

  console.log(knowledge);

  return (
    <div className="container">
      <div className="row">
        <div className="experience">
          <h5 id="knowledge-title">Knowledge</h5>
        </div>
      </div>
      <div className="knowledge-container">
        {knowledge.map((tech) => (
          <KnowledgeCard key={tech.id} tech={tech} />
        ))}
      </div>
    </div>
  );
}

export default ExperienceList;
