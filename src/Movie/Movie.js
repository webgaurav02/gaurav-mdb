import "./Movie.css"
import sample from "../sample.json"

const Movie = () => {
    return (
        <>
            <div className="container-fluid movie-info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 movie-left">
                            <div className="year-length">
                                <p>{sample.Year}</p>
                                <p>{sample.Runtime}</p>
                            </div>
                            <div className="poster-container">
                                <img className="poster" src={sample.Poster} alt="Poster" />
                            </div>
                            <div className="rating">
                                <p><i class="fa-solid fa-star"></i> {sample.imdbRating}/10</p>
                                <p>{sample.imdbVotes} Votes</p>
                            </div>
                            <div className="genre-cont">
                                <p className="genre">{sample.Genre}</p>
                            </div>
                        </div>
                        <div className="col-md-8 movie-right">
                            <h1 className="title">{sample.Title}</h1>
                            <p className="plot">{sample.Plot}</p>
                            <p className="director mt-5"><b>Director :</b> {sample.Director}</p>
                            <p className="writes"><b>Writers :</b> {sample.Writer}</p>
                            <p className="actors"><b>Actors :</b> {sample.Actors}</p>
                            <p className="released"><b>Released :</b> {sample.Released}</p>
                            {sample.BoxOffice && <p className="boxoffice"><b>BoxOffice :</b> {sample.BoxOffice}</p>}
                            <div className="lang-country mt-5">
                                <p className="language"><b>Language :</b> {sample.Language}</p>
                                <p className="country"><b>Country :</b> {sample.Country}</p>
                                <p className="rated"><b>Rated :</b> {sample.Rated}</p>
                            </div>
                            {sample.Awards !== 'N/A' && <p className="awards mt-5"><b>Awards :</b> {sample.Awards}</p>}
                            {sample.Ratings.length!==1 && <h3 className="mt-5 mb-3">Other Ratings</h3>}
                            {sample.Ratings.length!==1 && <div className="other-ratings">
                                {sample.Ratings.map(rate => {
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