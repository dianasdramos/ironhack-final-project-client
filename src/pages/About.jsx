import githubIcon from "./../assets/githubIcon.png"
import linkedinIcon from "./../assets/linkedinIcon.png"

function About() {

    return (
        <section className="text-black flex flex-col justify-center">
            <div className="m-4">
                <h4>Description?</h4>
            </div>
            <div className="flex flex-col m-4">
                <div>
                    <p className="text-lg">Tomás Bastos</p>
                </div>
                <div className="flex justify-center">
                    <a href="https://github.com/Tom4sB4stos" target="_blank"><img className="w-10 h-10" src={githubIcon} alt="github-icon" /></a>
                    <a href="https://www.linkedin.com/in/tom%C3%A1s-bastos-3aa674136/" target="_blank"><img className="w-10 h-10" src={linkedinIcon} alt="linkedin-icon" /></a>
                </div>
            </div>
            <div>
                <div className="flex flex-col m-4">
                    <div>
                        <p className="text-lg">Diana Ramos</p>
                    </div>
                </div>
                <div className="flex justify-center">
                    <a href="https://github.com/dianasdramos" target="_blank"><img className="w-10 h-10" src={githubIcon} alt="github-icon" /></a>
                    <a href="https://www.linkedin.com/in/dianaramos/" target="_blank"><img className="w-10 h-10" src={linkedinIcon} alt="linkedin-icon" /></a>
                </div>
            </div>
        </section>
    )
}

export default About;