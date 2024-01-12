import "./Spinner.css"

const Spinner = () => {
    return (
        <div className="spinner-container">
            <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default Spinner;