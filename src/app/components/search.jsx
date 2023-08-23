"use client"

import React from 'react'
import { useState } from 'react'
import Link from 'next/link';

function Search() {
    const apiKey = 'a668431af4419a2c021220d5bf04ef37';

    const [movie, setmovie] = useState("");
    const [results, setResults] = useState([]);
    
    const getMovies = () => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movie}`;
    const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNjY4NDMxYWY0NDE5YTJjMDIxMjIwZDViZjA0ZWYzNyIsInN1YiI6IjYyNThjM2Q1MTNhMzIwMDBhM2E4MGI0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2FfOkCUUIQspB70wElnRFFjXNzcnTxYAglc30GHkXhw'
    }};

    fetch(url, options)
    .then(res => res.json())
    .then(json => setResults(json.results))
    .catch(err => console.error('error:' + err));
    }

    // create a function to fetch the data from the api
    // create a function to display the data from the api
    // create a function to handle the search
    // create a function to handle the button click
    // create a function to handle the input change
    // create a function to handle the submit

    const handleInput = (e) => {
        setmovie(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        getMovies();
    }

    
    return (
        // create interface for search bar and button
        // add the tailwind classes to the elements to style them professionally
        // use tmdb api to search for movies
        // display the results in a grid
        // create link to movie details page
        // style the grid to display the results
    <>
    <div className="search-container text-center mt-20"> 
        <input 
            type="text" 
            placeholder="Search for a movie" 
            className="search-bar text-black rounded p-1"
            value={movie}
            onChange={handleInput}
            />
        <button 
            type="submit" 
            className="search-button ml-5 p-1 bg-blue-400 rounded"
            onClick={handleSubmit}
            >Search</button>
    </div>

    <div className="results-container grid grid-cols-6">
        {results.map(result => (
            <div className="result-item mt-10 p-10 max-w-xs" key={result.id}>
                    {result.poster_path ? ( 
                <img src={`https://image.tmdb.org/t/p/w500${result.poster_path}`} alt="" />
                    ) : (
                    <div className="text-center text-2xl mt-40">
                    </div>  
                    )}
                <h3 className='text-center mt-1'>
                    <Link href={`movies/${encodeURIComponent(result.title)}?title=${encodeURIComponent(result.title)}`}>
                        {result.title}
                    </Link>

                </h3>
        </div>
        ))}
    </div>
    </>
  )
}

export default Search