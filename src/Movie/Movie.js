import "./Movie.css"
import sample from "../sample.json"
import Spinner from "../Spinner/Spinner"

const Movie = (props) => {
    return (
        <>
            <div className="container-fluid movie-info">
            { props.isLoading && <Spinner/>}
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 movie-left">
                            <div className="year-length">
                                {props.info.Year && <p>{props.info.Year}</p>}
                                {props.info.Runtime && <p>{props.info.Runtime}</p>}
                            </div>
                            <div className="poster-container">
                                {props.info.Poster && <img className="poster" src={props.info.Poster} alt="Poster" />}
                            </div>
                            <div className="rating">
                                {props.info.imdbRating && <p><i className="fa-solid fa-star"></i> {props.info.imdbRating}/10</p>}
                                {props.info.imdbVotes && <p>{props.info.imdbVotes} Votes</p>}
                            </div>
                            <div className="genre-cont">
                                {props.info.Genre && <p className="genre">{props.info.Genre}</p>}
                            </div>
                        </div>
                        <div className="col-md-8 movie-right">
                            <h1 className="title">{props.info.Title}</h1>
                            {props.info.Plot && <p className="plot">{props.info.Plot}</p>}
                            {props.info.Director && <p className="director mt-5"><b>Director :</b> {props.info.Director}</p>}
                            {props.info.Writer && <p className="writes"><b>Writers :</b> {props.info.Writer}</p>}
                            {props.info.Actors && <p className="actors"><b>Actors :</b> {props.info.Actors}</p>}
                            {props.info.Released && <p className="released"><b>Released :</b> {props.info.Released}</p>}
                            {props.info.BoxOffice && <p className="boxoffice"><b>BoxOffice :</b> {props.info.BoxOffice}</p>}
                            <div className="lang-country mt-5">
                                {props.info.Language && <p className="language"><b>Language :</b> {props.info.Language}</p>}
                                {props.info.Country && <p className="country"><b>Country :</b> {props.info.Country}</p>}
                                {props.info.Rated && <p className="rated"><b>Rated :</b> {props.info.Rated}</p>}
                            </div>
                            {props.info.Awards !== 'N/A' && <p className="awards mt-5"><b>Awards :</b> {props.info.Awards}</p>}
                            {props.info.Ratings && props.info.Ratings.length!==1 && <h3 className="mt-5 mb-3">Other Ratings</h3>}
                            {props.info.Ratings && props.info.Ratings.length!==1 && <div className="other-ratings">
                                {props.info.Ratings.map(rate => {
                                    return <p><b>{rate.Source} : </b>{rate.Value}</p>
                                })}
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Movie