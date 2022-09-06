import { FaLinkedinIn, FaGithub, } from "react-icons/fa";

import "../styles/components/socialnetworkcontainer.sass";

const SocialNetworkContainer = () => {
  return (
    <section id="social-networks"> 
      <a href="https://www.linkedin.com/in/devfelipenunes/" target="_blank" className="social-btn" >
        <FaLinkedinIn />
      </a>

      <a href="https://github.com/devfelipenunes" target="_blank" className="social-btn" >
        <FaGithub />
      </a>
    </section>
  );
};

export default SocialNetworkContainer;