import { BsLinkedin } from "react-icons/bs";

function Footer() {
  return (
    <div className="container footer">
      <div className="row">
        <div className="my-picture">
          <h5>
            <a href="#top">Agustin Graziani | Portfolio</a>
          </h5>
        </div>
        <div className="footer-bottom">
          <h6>
            <a href="#"> Programming</a> | <a href="design-section">Design</a> |{" "}
            <a href="#">About me</a> | <a href="#">Contact</a>
          </h6>
        </div>
        <div className="linkedIn">
          <a href="https://www.linkedin.com/in/acggraziani/">
            <BsLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
