import { useState, useEffect } from "react";
import { proyects as data } from "../data/programming";
import { BsArrowUpCircleFill } from "react-icons/bs";
import { ProgrammingCard } from "./ProgrammingCard";

function ProgrammingList() {
  const [proyects, setProyects] = useState([]);

  useEffect(() => {
    setProyects(data);
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div programming-section>
          <h4 id="programming-section">Programming</h4>
        </div>
        {proyects.map((proyect) => (
          <ProgrammingCard key={proyect.id} proyect={proyect} />
        ))}

        <div>
          <p id="back-to-top">
            <a href="#top">
              Back to top <BsArrowUpCircleFill />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProgrammingList
