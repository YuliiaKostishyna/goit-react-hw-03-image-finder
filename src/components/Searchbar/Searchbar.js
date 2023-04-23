
const Searchbar =({handleChange, query, handleSubmit})=>{

return (<header>
  <form onSubmit={handleSubmit}>
    <button type="submit">
      <span className="button-label">Search</span>
    </button>

    <input
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

export default Searchbar;