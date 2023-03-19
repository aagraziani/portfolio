import {
  BsArrowUpCircleFill,
  BsGeoAltFill,
  BsFillEnvelopeFill,
  BsLinkedin,
  BsFillPersonFill
} from "react-icons/bs";
import ExperinceList from "./ExperienceList";

function AboutMe() {
  return (
    <div className="container">
      <div className="row abuot">
        <div className="about-me-section">
          <h4 id="about-me-section">About me</h4>
        </div>

        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-4">
            <img
              src="IMG_2363_Original.png"
              alt=""
              className="img-fluid mx-auto d-block cv-picture"
            />
          </div>
          <div className="about-me-contact col-sm-12 col-md-8 col-lg-8">
            <p>
              <BsFillPersonFill /> Who am I: full stack developer with strong backgroun in design
            </p>
            <p>
              <BsGeoAltFill /> Where do I live: Retiro, Buenos Aires, Argentina
            </p>
            <p>
              <BsFillEnvelopeFill /> My email: aagraziani@gmail.com
            </p>
            <p>
              <BsLinkedin /> My LinkedIn:{" "}
              <a href="https://www.linkedin.com/in/acggraziani/">
                Agustin Graziani
              </a>
            </p>
          </div>
        </div>

        <div className="row">
        <ExperinceList />
        </div>

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

export default AboutMe;
