import { AiFillInstagram } from "react-icons/ai";


const Footer = () =>{
    return(
        <footer>
        <div className="lineFooter"></div>
  <div className="footerContent">
    <h6>Moscato Vinoteca</h6>
    <p>
      Lascano Colodrero 2765, Cordoba, Argentina.
    </p>
    <ul className="socials">
      <li>
        {/* <a href="https://wa.link/emf33s" target="_blank">
          <img src="../img/whatsapp.svg" alt="Link de whatsapp"/>
        </a> */}
      </li>
      <li>
        <a href="https://www.instagram.com/moscatovinoteca" target="_blank">
          <AiFillInstagram/>
        </a>
      </li>
    </ul>
  </div>
  <div className="footerCopyright">
    <p>Copyright &copy;2022 Moscato. Designed by Matias Farias.</p>
  </div>
</footer>
    )
}

export default Footer;