import myImage from "../assets/images/KalpakGoshikwar.webp";
import {
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa6";
import ThemeToggler from "./ThemeToggler";
import { motion } from "framer-motion";

export default function Footer({ theme, toggleTheme }) {


  return (
    <motion.div className="Footer" 
      initial={{ x: window.innerHeight > window.innerWidth ? 0 : 400}}
      animate={{ x: 0}}
      transition={{ duration: 0.5 }}
    >
        <span className="Profile-Image">
          <img src={myImage} alt="Kalpak Goshikwar" />
        </span>
        <span className="Profile-Info">
          <h2>Kalpak Goshikwar</h2>
          <h4>Web Dev</h4>
        </span>
        <div className="Social-Links">
          <a href="/">
            <FaInstagram />
          </a>
          <a href="/">
            <FaLinkedinIn />
          </a>
          <a href="/">
            <FaGithub />
          </a>
          <a href="/">
            <FaEnvelope />
          </a>
        </div>
        <div className="toggle-container">
          <ThemeToggler theme={theme} toggleTheme={toggleTheme} />
        </div>
    </motion.div>
  );
}
