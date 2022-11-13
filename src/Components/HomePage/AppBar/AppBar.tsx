import './styles.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
  } from "@fortawesome/free-brands-svg-icons";
//snippet sfc
export const AppBar = () => {
    return ( 
        <ul  className="flex space-x-4 justify-center ">

            
            <li className="text-center flex-3">
                <a href="https://www.youtube.com/c/jamesqquick"
                className="youtube social">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
            </li>
            <li className="text-center flex-3">
                <a href="https://www.youtube.com/c/jamesqquick"
                className="youtube social">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
            </li>
        </ul>
     );
}
 
export default AppBar;