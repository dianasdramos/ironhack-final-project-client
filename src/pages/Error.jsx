import { Link } from "react-router-dom"
import error from "./../assets/error.jpg"

function Error() {
    return (
        <section className="flex justify-center flex-col">
            <div className="flex justify-center mt-8">
                <img className="w-80 h-80" src={error} />
            </div>
            <div>
                <p className="m-6 text-2xl">Oops... Page not found!</p>
            </div>
            <div>
                <Link to="/"><button className="text-white hover:bg-gray-400 m-4">Go Back Home</button></Link>
            </div>
        </section>
    )
}

export default Error;