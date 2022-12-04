import './styles.css';
import {useInView } from 'react-intersection-observer';
import ScrollDown from './ScrollDown/ScrollDown';
const Darin = () => {
    const { ref, inView } = useInView({
      });


    
    return ( 
        <div ref={ref}  className={`${inView ? 'sh' : 'hid'}`}>
            <div className="plate">
                <ScrollDown />
                <span className='md:text-6xl relative'>Darin Gharib</span>
                <h5 className='text-lg mt-2 font-light text-white'>University of California Santa Cruz</h5>
                <h5 className='text-lg mt-1'>Graduating June 2023</h5>                   
            </div>
        </div>
    );
        
}
 
export default Darin;