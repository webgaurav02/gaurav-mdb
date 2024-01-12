import './App.css';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import SearchResults from './SearchResults/SearchResults';
import Movie from './Movie/Movie';
import Footer from './Footer/Footer';
import { useState } from 'react';

function App() {

  const API_KEY = process.env.REACT_APP_API_KEY;

  const [ searchText, setSearchText ] = useState('');
  const [ searchRes, setSearchRes ] = useState(null);
  const [ searchLength, setLength ] = useState(0);
  const [ pageNo, setPage ] = useState(0);

  const searchForMovie = async () => {
    const text = document.getElementById('movieName').value;
    let url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${text}&page=${pageNo}`;
    setSearchText(text);
    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      setSearchRes(parsedData.Search);
      setPage(pageNo + 1);
    }
    catch (error) {
      console.error('Error fetching data:', error);
    }
  }


  const fetchMoreData = async () => {
    console.log("Fetching more data...");
    console.log("Page: ", pageNo);
    let nextPage = pageNo + 1;
    let url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchText}&page=${nextPage}`;
    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData.Search);
      setSearchRes(searchRes.concat(parsedData.Search));
      setPage(pageNo + 1);
    }
    catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  return (
    <>
      <Navbar />
      {!searchRes && <Home searchMovie={searchForMovie} />}
      {searchRes && <SearchResults
        results = {searchRes}
        text = {searchText}
        setSearchRes = {setSearchRes}
        total = {searchLength}
        fetchMoreData = {fetchMoreData}
        page = {pageNo}
      />}
      {/* <Movie /> */}
      <Footer />
    </>
  );
}

export default App;
