import "./Footer.css"

const Footer = () => {
    return (
        <footer className="dark-footer">
            <div className="container">
                <div className="above-footer">
                    <div>
                        <h2>About GauravMDb 🎬</h2>
                        <p className="mt-3 text">Welcome to GauravMDb, your personalized gateway to the cinematic universe powered by the Open Movie Database (OMDb).</p>
                        <p>Dive into a world of movie magic as we bring you comprehensive details about your favorite films and series.</p>
                    </div>

                    <hr />

                    <div>
                        <h4>🔍 Search and Explore</h4>
                        <p>Effortlessly search for movies and series using our intuitive interface. From blockbuster hits to hidden gems, GauravMDb is your go-to resource for discovering, exploring, and enjoying the best in cinema.</p>
                    </div>

                    <hr />

                    <div>
                        <h4>📊 Movie Insights</h4>
                        <p>Get the scoop on your favorite films with detailed information such as plot summaries, directors, actors, box office statistics, and more. Uncover the fascinating details that make each movie a unique cinematic experience.</p>
                    </div>

                    <hr />

                    <div>
                        <h4>🗣️ User Reviews</h4>
                        <p>Share your thoughts and read reviews from fellow movie buffs. Contribute to the GauravMDb community by rating and reviewing your watched movies – your opinion matters!</p>
                    </div>

                    <hr />

                    <h5 className="mt-5">GauravMDb – Your Passport to Cinematic Delight. Thank you for choosing us as your movie companion. Happy exploring! 🍿🎥</h5>

                </div>
                <div className="footer-content">
                    <p>&copy; 2024 GauravMDb. All rights reserved.</p>
                    <p>Designed & Developed by <a href="https://joshigaurav.site/" target="_blank" rel="noopener noreferrer">Gaurav Joshi</a></p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;