import { useState } from "react"

const ProfileSection = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState('');
    const [showProfile, setShowProfile] = useState(false);
  return (
    <div>
      <h2 >Profile Section</h2>
      <label htmlFor="name">Name: </label>
      <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)}/>
      <label htmlFor="age">Age: </label>
      <input type="text" id="age" value={age} onChange={(e) => setAge(e.target.value)}/>
      <button onClick={()=>setShowProfile(!showProfile)}>{showProfile ? 'Hide' : 'Show'} Profile</button>
      {showProfile && <div><p>Name: {name}</p> <br/> <p>Age: {age}</p></div>
      }
    </div>
  )
}

export default ProfileSection
