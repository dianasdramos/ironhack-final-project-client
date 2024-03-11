import { Link } from "react-router-dom"

function Error() {
    return (
        <section>
            <p>Oops... Page not found!</p>
            <Link to="/"><button>Go Back Home</button></Link>
        </section>
    )
}

export default Error;