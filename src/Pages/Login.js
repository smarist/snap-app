import React from "react"
import "../css/register.css"
import {Link} from "react-router-dom"

export default function Login() {
    
    const [formData, setFormData] = React.useState(
      {
        email: "",
        password: "",
      }
    )

    function handleChange(event){
      const {name, value,type, checked} = event.target
      
      setFormData(prevFormData => {
        return {
          ...prevFormData,
          [name]: type === "checkbox" ? checked : value
        }
      }
        )
    }
    function handleSubmit(event) {
        event.preventDefault()
        formData.confirmPassword === formData.password ? console.log("Successfully signed up") :console.log("passwords do not match") 

        formData.okayToEmail === true && formData.confirmPassword === formData.password && console.log("Thanks for signing up for our newsletter!") 

    }
    
    return (
        <div className="align">
           <h2>Hello!!</h2>
           <h3>Login to your account</h3>
           <div className="form-container">
                <form className="form" onSubmit={handleSubmit}>
                    <input 
                        type="email" 
                        placeholder="Email address"
                        className="form--input"
                        name= "email"
                        onChange= {handleChange}
                        value= {formData.email}
                        
                    />
                    <input 
                        type="password" 
                        placeholder="Password"
                        className="form--input"
                        name= "password"
                        onChange= {handleChange}
                        value= {formData.password}
                    />
                    <h6>Forget your password?</h6>
                    <button 
                        className="form--submit"
                    >
                        Login
                    </button>
                </form>
             </div>
             <div className="flex">
                 <h4>Don't have an account?</h4>
                 <Link to="/Register"><h4>Register</h4></Link>
             </div>
        </div>
    )
}

