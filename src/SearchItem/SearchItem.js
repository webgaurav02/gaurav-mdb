import "./SearchItem.css"


const SearchItem = (props) => {

    const handleClick = () => {
        // Call the setId function with the imdbID as an argument
        console.log("I'm here")
        props.setId(props.result.imdbID);
    };

    return (
        <div className="container-fluid search-item">
            <div className="row" onClick={handleClick}>
                <div className="col-md-4">
                    <img className="poster" src={props.result.Poster} alt="Poster" />
                </div>
                <div className="col-md-8">
                    <h2>{props.result.Title}</h2>
                    <h5><b>{props.result.Year}</b></h5>
                    <p>{props.result.Type}</p>
                    {/* <p>{props.result.imdbID}</p> */}
                </div>
            </div>
        </div>
    );
}


export default SearchItem