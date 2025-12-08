import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SearchForm = ({toggleSearch, setToggleSearch}) => {
    const [input, setInput] = useState("");
    const navigate = useNavigate();
    const inputRef = useRef(null);

    useEffect(() =>{
      if(toggleSearch){
        setTimeout(() => inputRef.current?.focus(), 0);
      }
    },[toggleSearch])

    const handleSearch = (e) =>{
        e.preventDefault();

        if(input){
            navigate(`/news/search/${input}?query=${input}`);
            setToggleSearch(false);
        }
    }

    const handleKeyDown = e =>{
      e.preventDefault();

      if(e.target.key === "Enter"){
        handleSearch();
      }
    }

  return (
    <form className="search_form">
        <input value={input} onChange={e => setInput(e.target.value)}
         placeholder="Search news" ref={inputRef}></input>
        <button type="submit" onClick={e => handleSearch(e)} onKeyDown={handleKeyDown}>Search</button>
    </form>
  )
}

export default SearchForm;