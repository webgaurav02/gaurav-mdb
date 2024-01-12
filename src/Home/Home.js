import "./Home.css"

const Home = () => {
    return (
        <>
            <div className="container home">
                <div className="row">
                    <div className="col-md-6 search-movie">
                        <input type="search-bar" name="movieName" id="movieName" />
                        <button type="button" id="movieSearchBtn"><i className="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                    <div className="col-md-6">
                        <h1>GauravMDB: Your Movie Insight Hub</h1>
                        <p>Explore cinema effortlessly with GauravMDB. Instantly access movie ratings, actor details, plot summaries, release years, awards, and more. Find your classic favorites or discover the latest releases - GauravMDB delivers concise and reliable movie data, making your cinematic experience seamless.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;