import { Link } from "react-router-dom";

const Nomatch = () => (
    <>
        <h1 className="text-center">404 PAGE NOT FOUND</h1>
        <Link to='/'>
            <p className="text-center">Return Home</p>
        </Link>
    </>
)

export default Nomatch;