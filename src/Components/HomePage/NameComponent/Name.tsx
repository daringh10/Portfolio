import './styles.css';
import {useInView } from 'react-intersection-observer';
const Darin = () => {
    const { ref, inView } = useInView({
      });


    
    return ( 
        <div ref={ref}  className={`${inView ? 'sh' : 'hid'}`}>
            <div className="plate">
                <p>Darin Gharib</p>
                <p className='text-lg mt-2 font-light text-white'>University of California Santa Cruz</p>
                <p className='text-lg mt-1'>Graduating June 2023</p>                   
            </div>
        </div>
    );
        
}
 
export default Darin;