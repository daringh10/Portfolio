import './styles.css'
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion"
import { LazyMotion, domAnimation } from "framer-motion"
export const Description = () => {
    const { ref, inView } = useInView({
        threshold: .8
    });
    return (
        <div className="grid place-items-center text-center">
            <h3 ref={ref} className={`${inView ? 'sh_desc' : 'hid_desc'}`+
        ' font-mono text-rose-700 mt-20 text-2xl md:text-5xl'}>Full Stack Web Developer</h3>
                        <motion.div
            animate={{ x: 100 }}
            transition={{ ease: "easeOut", duration: 2 }}
            />
         </div>
    )

}