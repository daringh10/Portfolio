import './styles.css';
import { InView, useInView } from 'react-intersection-observer';

const Darin = () => {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
      });
    return ( 
        <div ref={ref} className= {InView ? 'show' : 'hidden'}>
            <div className="plate">
                <p className="shadow text2">DARIN</p>
                <p className="shadow text3">GHARIB</p>
                
            </div>
        </div>
    );
        
}
 
export default Darin;