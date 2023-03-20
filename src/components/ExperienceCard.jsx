/*export function ExperienceCard({ job }) {

    return(
        <div className="col-12 job job-description">
            <h5>{job.company}</h5>
            <h6>{job.dates}</h6>
            <h6>{job.experience_level}</h6>
            <ul>
             {
                job.tasks.map((task) => (
                    <li key={task.id}>{task.description}</li>
                ))
             }
            </ul>
        </div>
    );
}*/

export function ExperienceCard({ job }) {
  return (
    <div className="col-12 job job-description">
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header job-title-description" id={job.heading_id}>
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target= {job.data_bs_target}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              {job.company}
            </button>
          </h2>
          <div
            id={job.aria_controls}
            className="accordion-collapse collapse"
            aria-labelledby={job.heading_id}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
            <h6>{job.dates}</h6>
            <h6>{job.experience_level}</h6>
            <ul>
             {
                job.tasks.map((task) => (
                    <li key={task.id}>{task.description}</li>
                ))
             }
            </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
