import { FaSearch } from 'react-icons/fa'
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useState, useRef, useEffect, useCallback } from 'react';
import SearchForm from './SearchForm';
import { add } from 'date-fns';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [toggleSearch, setToggleSearch] = useState(false);
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
  const wrapperRefs = useRef([]);

  const addRef = useCallback((node) => {
    if (node) {
      wrapperRefs.current.push(node);
      return () => {
        wrapperRefs.current = wrapperRefs.current.filter((n) => n !== node);
      };
    }
  }, []);

  const handleClickOutside = useCallback((e) => {
    const currentRefs = wrapperRefs.current;
    const clickedOutside = currentRefs.every(
      (ref) => ref && !ref.contains(e.target)
    );

    if (clickedOutside) {
      setToggleSearch(false);
      setToggleMobileMenu(false);
    }
  }, [setToggleSearch, setToggleMobileMenu]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      wrapperRefs.current = [];
    };
  }, [handleClickOutside]);


  return (
    <nav className="navigation">
      <img src="/news_icon.png" onClick={() => navigate("/")}></img>

      <ul className="wide_screen">
        <li className={location.pathname === "/news/physics" ? "selected" : ""}>
          <Link to={`/news/physics?query=physics`}>Physics</Link></li>
        <li className={location.pathname === "/news/biology" ? "selected" : ""}>
          <Link to={`/news/biology?query=biology`}>Biology</Link></li>
        <li className={location.pathname === "/news/chemistry" ? "selected" : ""}>
          <Link to={`/news/chemistry?query=chemistry`}>Chemistry</Link></li>
        <li className={location.pathname === "/news/astronomy" ? "selected" : ""}>
          <Link to={`/news/astronomy?query=astronomy`}>Astronomy</Link></li>
      </ul>

      <button
        className="nav_toggle"
        ref={addRef}
        onClick={() =>{
          setToggleMobileMenu(prev => !prev);
          setToggleSearch(false);
        }}
      >
        ≡
      </button>

      <ul className={`mobile_menu ${toggleMobileMenu ? "opened" : ""}`} ref={addRef}>
        <li className={location.pathname === "/news/physics" ? "selected" : ""}>
          <Link to={`/news/physics?query=physics`}
            onClick={() => setToggleMobileMenu(false)}>Physics</Link></li>
        <li className={location.pathname === "/news/biology" ? "selected" : ""}>
          <Link to={`/news/biology?query=biology`}
            onClick={() => setToggleMobileMenu(false)}>Biology</Link></li>
        <li className={location.pathname === "/news/chemistry" ? "selected" : ""}>
          <Link to={`/news/chemistry?query=chemistry`}
            onClick={() => setToggleMobileMenu(false)}>Chemistry</Link></li>
        <li className={location.pathname === "/news/astronomy" ? "selected" : ""}>
          <Link to={`/news/astronomy?query=astronomy`}
            onClick={() => setToggleMobileMenu(false)}>Astronomy</Link></li>
      </ul>

      <div className="search_icon" ref={addRef}>
        <FaSearch onClick={() => {
          setToggleSearch(prev => !prev);
          setToggleMobileMenu(false);
        }} />
        {toggleSearch && <SearchForm toggleSearch={toggleSearch} setToggleSearch={setToggleSearch} />}
      </div>
    </nav>
  )
}

export default Navbar;