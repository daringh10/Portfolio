import { useInView } from "react-intersection-observer"
export const ProjectText = () => {
    const { ref, inView } = useInView({
    });
    return(
        <h1 ref={ref} className={`${inView ? 'sh_app' : 'hid_app'}`+" text-9xl	text-white font-mono font-semibold"}>Projects</h1>
    )
}