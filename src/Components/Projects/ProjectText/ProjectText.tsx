import { useInView } from "react-intersection-observer"
export const ProjectText = () => {
    const { ref, inView } = useInView({
        threshold: .9,
        delay: 150,
    });
    return(
        <h1 ref={ref} className={`${inView ? 'sh_app' : 'hid_app'}`+" text-base md:text-9xl	text-white font-mono font-semibold h-2"}>Projects</h1>
    )
}