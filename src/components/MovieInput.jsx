import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMovie } from "../movieSlice";

export const MovieInput = () => {
    const dispatch = useDispatch();

    const [newMovie, setNewMovie] = useState("");

    const handleAddMovie = () => {
        if(newMovie){
            dispatch(addMovie(newMovie))
            setNewMovie("");
        }
    }
    return (
        <>
            <input onChange={(e)=> setNewMovie(e.target.value)} value={newMovie}/>
            <button onClick={handleAddMovie}> submit</button>
    
    </>
    ) 
    
} 