
const Tab = ({name, isActive, onClick, Component}) => {
  return (
    <div>
      <button 
        onClick={onClick}
        style={{
            flex: 1,
            padding: "10px",
            outline:'none',
            margin: '5px',
            border: 'none',
            cursor: 'pointer',
            background: isActive ? "#007bff" : "white",
            color: isActive ? "white" : "black",
        }}
        >
        {name}
      </button>
    </div>
  )
}

export default Tab
