import React, { useState } from 'react'
import StarRating from './StarRating'

const Form = () => {
    const [showPassword, setShowPassword] = useState(false);
    const handleShowHidePwd = () => {
        setShowPassword(!showPassword);

    }
    return (
        <form>
            <div className='form-field'>
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" />
            </div>
            <br />
            <div className='form-field'>
                <label htmlFor="Productid">Produt id: </label>
                <input type="text" id="Productid" />
            </div>
            <br />
            <div className='form-field' style={{ position: "relative", width: "300px" }}>
                <label htmlFor="password">Password </label>
                <input type={showPassword ? "text" : "password"} id="password" style={{
                    width: "100%",
                   
                    height: "35px",
                }} />
                <span style={{
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                    color: "blue",
                    fontSize: "14px",
                }} className='show-hide' onClick={handleShowHidePwd}>{showPassword ? "hide" : "show"}</span>
            </div>
            <br />
            <div className='form-field'>
                <label htmlFor="rating">Rating: </label>
                <StarRating />
            </div>
            <br />
            <button type="submit">submit</button>
        </form>
    )
}

export default Form
