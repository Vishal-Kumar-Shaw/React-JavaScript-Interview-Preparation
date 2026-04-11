import '../App.css'
const SearchItem = ({value,index, onClick, isActive}) => {
  return (
    <div  className={`search-item ${isActive ? "active" : ""}`} key={index}  onClick={() => onClick(value)}>
      {value.name}
    </div>
  )
}

export default SearchItem
