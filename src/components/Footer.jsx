import { BsLinkedin } from 'react-icons/bs';

function Footer() {
    return(
        
<div class="container footer">
    <div class="row">
        <div>
            <h5><a href="#top">Agustin Graziani | Portfolio</a></h5>
        </div>
        <div class="footer-bottom">
            <h6><a href="#"> Programming</a> | <a href="design">Design</a> | <a href="#">About me</a> | <a href="#">Contact</a></h6>
        </div>
        <div className='linkedIn'>
        <a href="https://www.linkedin.com/in/acggraziani/"><BsLinkedin /></a>
        </div>
    </div>
</div>
    );
}

export default Footer;