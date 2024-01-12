import Spinner from "./Spinner/Spinner";
import "./Loading.css"

const Loading = () => {
    return (
        <div className="container-fluid loader">
            <Spinner />
        </div>
    );
}

export default Loading