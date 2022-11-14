import './styles.css'
import { useInView } from 'react-intersection-observer';
export const Description = () => {
    const { ref, inView } = useInView({
    });
    return (
         
        <h3 ref={ref} className={`${inView ? 'sh_desc' : 'hid_desc'}`+
        ' font-mono text-rose-500 mt-20 text-5xl'}>Full Stack Web Developer</h3>
    )

}