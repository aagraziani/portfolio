import { useState, useEffect } from "react";
import { designs as data } from "../data/designs";
import { BsArrowUpCircleFill } from "react-icons/bs";
import { DesignCard } from './DesignCard';

function DesignList() {
  const [designs, setDesigns] = useState([]);

  useEffect(() => {
    setDesigns(data);
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="design-section">
          <h4 id="design-section">Design</h4>
        </div>
        {designs.map((design) => (
          <DesignCard key={design.id} design={design}/>
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

export default DesignList;
