import './styles.css';
import {useInView } from 'react-intersection-observer';
const Darin = () => {
    const { ref, inView } = useInView({
      });


    
    return ( 
        <div ref={ref}  className={`${inView ? 'sh' : 'hid'}`}>
            <div className="plate">
                <p className="shadow text2">DARIN</p>
                <p className="shadow text3">GHARIB</p>
                
            </div>
        </div>
    );
        
}
 
export default Darin;