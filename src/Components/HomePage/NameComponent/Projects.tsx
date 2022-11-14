import './styles.css';
import {useInView } from 'react-intersection-observer';
const Projects = () => {
    const { ref, inView } = useInView({
      });


    
    return ( 
        <div ref={ref}  className={`${inView ? 'sh' : 'hid'}`}>
            <div className="plate">
                <p className="shadow text3">PROJECTS</p>
            </div>
        </div>
    );
        
}
 
export default Projects;