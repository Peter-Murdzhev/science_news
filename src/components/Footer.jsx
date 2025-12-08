import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <ul id="footer">
        <li><Link to={"/about"}>About me</Link></li>
    </ul>
  )
}

export default Footer;