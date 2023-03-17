export function DesignCard({ design }) {
  return (
    <div className="col-sm-12 col-md-6 col-lg-4 design">
      <img src={design.picture} alt="" className="img-fluid" />
      <p>{design.description}</p>
    </div>
  );
}