import { Link } from "react-router-dom";
import githubIcon from "./../assets/github.png"
import linkedinIcon from "./../assets/linkedin.png"

function About() {

    return (
        <section className="text-black flex flex-col justify-center">
            <div className="mt-8 mx-20">
                <h4 className="text-center">Welcome to our collaborative vintage photo gallery! Dive into a world of nostalgia with our curated collection of timeless images contributed by users worldwide. Join our community and share your own vintage treasures, preserving the beauty of the past for future generations to enjoy.</h4>
            </div>
            <div>
                <p className="mt-8 mx-20">To learn more about the creators behind this project, visit our profiles:</p>
            </div>
            <div className="flex flex-col m-8">
                <div>
                    <p className="text-lg font-bold">Tomás Bastos</p>
                </div>
                <div className="flex justify-center m-3">
                    <a className="m-1" href="https://github.com/Tom4sB4stos" target="_blank"><img className="w-9 h-9" src={githubIcon} alt="github-icon" /></a>
                    <a className="m-1" href="https://www.linkedin.com/in/tom%C3%A1s-bastos-3aa674136/" target="_blank"><img className="w-9 h-9" src={linkedinIcon} alt="linkedin-icon" /></a>
                </div>
            </div>
            <div>
                <div className="flex flex-col">
                    <div>
                        <p className="text-lg font-bold">Diana Ramos</p>
                    </div>
                </div>
                <div className="flex justify-center m-3">
                    <a className="m-1" href="https://github.com/dianasdramos" target="_blank"><img className="w-9 h-9" src={githubIcon} alt="github-icon" /></a>
                    <a className="m-1" href="https://www.linkedin.com/in/dianaramos/" target="_blank"><img className="w-9 h-9" src={linkedinIcon} alt="linkedin-icon" /></a>
                </div>
                <div>
                    <Link to="/"><button className="text-white hover:bg-gray-400 m-10">Back</button></Link>
                </div>
            </div>
        </section>
    )
}

export default About;