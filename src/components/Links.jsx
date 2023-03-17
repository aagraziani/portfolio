import { useState, useEffect } from "react";
import { links as data } from "../data/links";

function Links() {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    setLinks(data);
  });

  return (
    <div className="container">
      <div className="row link-container">
        {links.map((link) => (
          <div key={link.id} className="col-6 col-md-6 col-lg-3 link">
            <h2>
              <a href={link.link}>{link.name}</a>
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Links;
