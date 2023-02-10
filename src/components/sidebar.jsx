import SocialNetworks from "./SocialNetworks";
import InformationContainer from "./InformationContainer";

import Avatar from "../img/profile-pic4b.png";
import "../styles/components/saidebar.sass";


const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="Ivan Leonardi" />
            <p className="title">Desenvolvedor Front-end</p>
            
            <SocialNetworks />
            <InformationContainer />
            
            <a href="" className="btn">Minhas certificações</a>

        </aside>
    )
}

export default Sidebar;