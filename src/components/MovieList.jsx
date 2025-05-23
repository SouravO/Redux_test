import React, { use }  from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeMovie } from "../movieSlice";

export const MovieList = () => {
    const movies = useSelector((state) => state.movies.movies);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
         dispatch(removeMovie(id))

    }
    return(<>
    
        <div>Movies</div>
        {movies.map((movies) => (
            <div key={movies.id}>
                <h2>{movies.title}</h2>
                <button onClick={() => handleDelete(movies.id)}>dlt</button>
            </div>
        ))}
    </>
    ) 
        
} 