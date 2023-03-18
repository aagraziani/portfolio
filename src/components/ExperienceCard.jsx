export function ExperienceCard({ job }) {

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
}