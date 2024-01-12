import './App.css';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import SearchResults from './SearchResults/SearchResults';
import Movie from './Movie/Movie';
import Footer from './Footer/Footer';
import { useEffect, useState } from 'react';
import Loading from "./Loading"


function App() {

  const API_KEY = process.env.REACT_APP_API_KEY;

  const [searchText, setSearchText] = useState('');
  const [searchRes, setSearchRes] = useState(null);
  const [searchLength, setLength] = useState(0);
  const [pageNo, setPage] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [id, setId] = useState(null);
  const [movie, setMovie] = useState(null);



  const navSearch = async () => {
    console.log("Called!");
    setId(null)
    setMovie(null)
    setPage(prev => prev - 1);
    setLoading(true);
    const text = document.getElementById('navSearch').value;
    let url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${text}&page=${pageNo}`;
    setSearchText(text);
    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      setSearchRes(parsedData.Search);
      setLength(parsedData.totalResults);
      setPage((prev) => prev + 1);
    }
    catch (error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false);
  }


  const searchForMovie = async () => {
    setLoading(true);
    const text = document.getElementById('movieName').value;
    let url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${text}&page=${pageNo}`;
    setSearchText(text);
    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      setSearchRes(parsedData.Search);
      setLength(parsedData.totalResults);
      setPage((prev) => prev + 1);
    }
    catch (error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false);
  }

  useEffect(() => {
    const handleKeyPress = (event) => {
      // Check if the pressed key is Enter (key code 13)
      if (event.key === 'Enter') {
        // Call your search function when Enter key is pressed
        // console.log(event)
        searchForMovie();
      }
    };

    // Add the event listener to the document
    document.addEventListener('keydown', handleKeyPress);

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [searchForMovie]); // Include searchForMovie in the dependency array to ensure the latest version is used



  const fetchMoreData = async () => {
    let nextPage = pageNo;
    let url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchText}&page=${nextPage}`;
    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      setSearchRes(searchRes.concat(parsedData.Search));
      setPage(nextPage + 1);
    }
    catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const loadNextItems = async () => {
    window.scrollTo({ top: 0, left: 0 });
    setLoading(true);
    let nextPage = pageNo;
    setPage(nextPage + 1);
    let url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchText}&page=${nextPage}`;
    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      setSearchRes(parsedData.Search);
    }
    catch (error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false);
  }

  const loadPrevItems = async () => {
    window.scrollTo({ top: 0, left: 0 });
    setLoading(true);
    let prevPage = pageNo - 4;
    setPage(prevPage + 1);
    let url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchText}&page=${prevPage}`;
    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      setSearchRes(parsedData.Search);
    }
    catch (error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false);
  }



  const getMovie = async () => {
    window.scrollTo({ top: 0, left: 0 });
    setLoading(true);
    let url = `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`;
    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      // console.log(parsedData);
      setMovie(parsedData);
    }
    catch (error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false);
  }

  useEffect(() => {
    // console.log('myState has changed:', id);
    getMovie();
  }, [id]);



  return (
    <>
      <Navbar search={navSearch} />
      {!searchRes && !isLoading && <Home searchMovie={searchForMovie} />}
      {isLoading && <Loading />}
      {searchRes && !id && <SearchResults
        results={searchRes}
        text={searchText}
        setSearchRes={setSearchRes}
        total={searchLength}
        fetchMoreData={fetchMoreData}
        page={pageNo}
        setPage={setPage}
        nextItems={loadNextItems}
        prevItems={loadPrevItems}
        isLoading={isLoading}
        setId={setId}
      />}
      {id && <Movie info={movie} isLoading={isLoading} /> }
      <Footer />
    </>
  );
}

export default App;
