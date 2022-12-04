import { IProjectModel } from "../../../../model/project"
import './styles.css';
export const Projects = () => {

    const projects: IProjectModel[] = [
        {
            title: "Full Stack Email Application",
            desc: "I wanted to create something big for my first full stack project, message me if you want to check it out! For version 3 I want to drastically clean the UI. Features: Login/Authentication, Send email to users with typeahead, Move mail to folders, Favorite Emails",
            img: "https://play-lh.googleusercontent.com/D1Dz2BjPYev_oyksKXsdtAS66a_2Ql-sklpzTnwR9lqnDG_P5lAJEtfR70FudJ0XMA",
            projLogo: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200402205611/What-is-PERN-Stack.png",
            date: "Nov 26 2022",
            href: "https://github.com/daringh10/FullStackEmailApp"
        },
        {
            title: "Simulate buying/selling stocks with an API",
            desc: "I made this for one of my Harvard CS50 projects using Flask and Python.",
            img: "https://iexcloud.io/images/share-card.png",
            projLogo: "data:image/png;base64,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",
            date: "Aug 2 2022",
            href: "https://github.com/daringh10/TradeStocksSim"
        },
        {
            title: "Pokemon Chrome Extension",
            desc: "My FIRST Javscript project - The structure and coding practices are very bad, primarly because I had never used JS before so I was still learning the basics. It was really bad at first but after some changes it works a lot better. It also features a custom typeahead feature without using any libaries - Using a prefix tree",
            img: "https://cdn.dribbble.com/users/113499/screenshots/15925733/media/b48c0981534e3a66d2f3104d31146fa0.png?compress=1&resize=400x300&vertical=top",
            projLogo: "data:image/png;base64,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",
            date: "Jan 4 2022",
            href: "javascript:void(0)"
        },
    ]
    
    return (
        <section className="mt-4 mx-auto px-20 max-w-screen-xl lg:px-8">
            <div className="text-center">
                <h1 className=" text-3xl md:text-6xl text-white font-semibold">
                    Projects
                </h1>
                <div className="md:text-2xl space-x-2 mt-3 flex  justify-center	">
                    <p> [</p>
                    <p className="text-white">A list of projects completed or activley being worked on </p>
                    <p> ]</p>
                </div>
                <div>
                <p className="md:text-xl text-white/50">Click Cards for More Details </p>
                </div>
            </div>
            <div className=" grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {
                    projects.map((items, key) => (
                        <article className=" max-w-md mx-auto mt-4 shadow-lg border-4 border-gray-800 rounded-md duration-300 hover:shadow-sm" key={key}>
                            <a target={'_blank'} href={items.href}>
                                <img  src={items.img} loading="lazy" alt={items.title}  className=" w-full h-48 rounded-t-md" />
                                <div className="flex items-center mt-2 pt-3 ml-4 mr-2">
                                    <div className="flex-none w-10 h-10 rounded-full">
                                        <img height={10} src={items.projLogo} className="w-full h-full rounded-full" />
                                    </div>
                                    <div className="ml-3">
                                        <span className="block text-white font-bold text-sm">{items.date}</span>
                                    </div>
                                </div>
                                <div className=" bg-white p-5 mt-5 rounded-md pt-3 ml-4 mr-2 mb-3">
                                    <h3 className="text-3xl text-gray-500 font-bold">
                                        {items.title}
                                    </h3>
                                    <hr className="titleLine"/>
                                    <p className="font-bold text-black text-lg mt-1">{items.desc}</p>
                                </div>
                            </a>
                        </article>
                    ))
                }
            </div>
        </section>
    )
}
