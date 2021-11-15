const Search = (props) => {
 return (
  <p>filter shown with <input type="text" value={props.newSearch} onChange={(e) => props.setNewSearch(e.target.value)}></input></p>
 )
}

export default Search