import './App.css'
import { useState } from 'react'

function App() {
  const [showDetails, SetShowDetails] = useState(false);

  return (
    <>
      <div>
        <h5><button className={showDetails ? 'rotated' : ""} onClick={()=>SetShowDetails(!showDetails)}>&gt;</button>This is a accordion</h5>
        {showDetails && <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia nam nesciunt error aut velit provident eos non culpa, ut minima molestiae eum et vero aliquid incidunt iusto aspernatur temporibus, nulla eveniet hic accusamus, molestias exercitationem maxime sint. Aspernatur similique maxime accusamus provident numquam voluptatum fugiat ut deleniti. Maiores, iusto sit.</p>}
      </div>
    </>
  )
}

export default App
