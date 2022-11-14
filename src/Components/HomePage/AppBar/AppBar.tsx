import './styles.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useInView } from 'react-intersection-observer';
import { faCheck, faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import {
    faConnectdevelop,
    faGithub,
    faLinkedin,
    faMailchimp,
    faSuperpowers,
  } from "@fortawesome/free-brands-svg-icons";
import { useState } from 'react';
//snippet sfc
export const AppBar = () => {
    const [copied, setCopied] = useState(false);
    const { ref, inView } = useInView({
    });
    const handleCopy = () => {
        setCopied(true);
        setInterval(()=>setCopied(false),2500);
    }
    return ( 
        <ul ref={ref}  className={`${inView ? 'sh_app' : 'hid_app'}`+' flex space-x-4 justify-center'}>

            
            <li className="text-center flex-3">
                <a target={'_blank'} href="https://www.linkedin.com/in/darin-gharib-0b10ba183/"
                className="youtube social">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
            </li>
            <li className="text-center flex-3">
                <a target={'_blank'} href="https://github.com/daringh10"
                className="youtube social">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
            </li>
            <li className="text-center flex-3">
                {!copied ?
                    <a  onClick={() => {
                        handleCopy();
                        navigator.clipboard.writeText('darin.gharib@outlook.com')
                    }}
                    className="youtube social cursor-pointer">
                        <FontAwesomeIcon icon={faEnvelope} size="2x" />
                    </a> :
                    <a
                    className={"youtube social cursor-pointer transition-opacity opacity-2"}>
                       <p className='text-xs'>Copied!</p>
                    </a>}

            </li>
        </ul>
     );
}
 
export default AppBar;