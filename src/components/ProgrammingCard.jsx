export function ProgrammingCard({ proyect }) {
    return (
      <div className="col-sm-12 col-md-12 col-lg-12 programming">
        <h5>{proyect.name}</h5>
        <a target="_blank" href={proyect.link}>Ver proyecto</a>
        <p id="proyect-p" className="proyect-p">{proyect.description}</p>
      </div>
    );
  }