import { useState, useEffect } from "react";
import { experience as data } from "../data/experience";
import { ExperienceCard } from "./ExperienceCard";

function ExperinceList() {
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    setExperience(data);
  }, []);

  return (

    
        <div className="container">
            <div className="row">
                <div className='experience'>
                    <h5>Experience</h5>
                </div>
            </div>
            {experience.map((job)=> (
                <ExperienceCard key={job.id} job={job} />
            ))}
        </div>
  );
}

export default ExperinceList;
