import { useNavigate } from "react-router-dom";

function About() {
    const navigate = useNavigate();
    function clickHandler() {
        //move to support page
        navigate("/support");

    }

    function bachHandler() {
        navigate(-1);
    }
    return (
        <div>
            <h1>about page</h1>
            <button onClick={clickHandler}>move to support page</button>
            <button onClick={bachHandler}>Go Back</button>
        </div>


    )
}



export default About;