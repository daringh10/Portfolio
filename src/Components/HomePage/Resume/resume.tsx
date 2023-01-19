import { useInView } from "react-intersection-observer";
const imgUrl = new URL('../../../../public/Darin Gharib Resume 2023 (14).pdf', import.meta.url).href


export const Resume = () => {
    const { ref, inView } = useInView({
    });
    return (
        <div className="grid place-items-center">

        
            <a href={imgUrl}
            download
            ref={ref} className={`${inView ? 'sh' : 'hid'}` +'  relative inline-block text-lg group mt-10 font-mono'}>
                <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg">
                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-white"></span>
                <span className="resume relative">Resume PDF</span>
                </span>
                <span className="bg-rose-800 absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-rose-800 d rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
            </a>
        </div>
    )
}