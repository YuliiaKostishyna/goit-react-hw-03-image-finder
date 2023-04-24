import PropTypes from "prop-types"; 
import './Searchbar.css'
const Searchbar =({handleChange, query, handleSubmit})=>{

return (<header className='Searchbar'>
  <form className='SearchForm' onSubmit={handleSubmit} >
    <button className="SearchForm-button" type="submit">
      <span className="SearchForm-button-label">Search</span>
    </button>

    <input
    className='SearchForm-input'
      name = 'query'
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      onChange={handleChange}
      value={query}
    />
  </form>
</header>)
}

Searchbar.propTypes = {
  handleChange:PropTypes.func.isRequired,
  query:PropTypes.string.isRequired,
  handleSubmit:PropTypes.func.isRequired
}

export default Searchbar;