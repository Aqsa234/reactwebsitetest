import React, { useState } from "react";
import Srcresult from "./Srcresult.jsx";

const Search = () => {

    const [img,setImg] = useState("");
    const InputEvent = (event) =>{
         const data = event.target.value;
        setImg(data);
    }

    return(
        <>
        <div className="searchbar">
        <input type="text" 
        placeholder="Search anything" 
        value={img}
        onChange={InputEvent}/>

        { img  === "" ? null : <Srcresult name={img}/>}
        </div>
        </>
    );

}
export default Search;