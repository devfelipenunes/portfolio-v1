import SocialNetworkContainer from "./SocialNetworkContainer";
import AboutContainer from "./AboutContainer";

import Avatar from "../img/Perfil.png";

import "../styles/components/maincontent.sass";
import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Matheus Battisti" />
      <p className="title">Desenvolvedor Front-End</p>
      <SocialNetworkContainer />
      <div id="main-content">
        <AboutContainer />
      </div>
      <a href="https://docs.google.com/document/d/1jnpK1a2qjzbKcdFh1dYxU6-oDwrtbxTY-YVVVTqFPyo/edit?usp=sharing#" target="_blank" className="btn">
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;