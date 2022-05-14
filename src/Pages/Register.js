import React from "react"
import "../css/register.css"
import {Link} from "react-router-dom"

export default function Register() {
    
    const [formData, setFormData] = React.useState(
      {
        email: "",
        password: "",
        confirmPassword: "",
        okayToEmail: false,

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

        console.log(formData)
    }
    
    return (
        <div className="align">
           <h3>Register for our services</h3>
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
                    <input 
                        type="password" 
                        placeholder="Confirm password"
                        className="form--input"
                        name= "confirmPassword"
                        onChange= {handleChange}
                        value= {formData.confirmPassword}
                    />
                    
                    <div className="form--marketing">
                        <input
                            id="okayToEmail"
                            type="checkbox"
                            name= "okayToEmail"
                            onChange= {handleChange}
                            checked= {formData.okayToEmail}
                            
                        />
                        <label htmlFor="okayToEmail" className="small">I agree to the terms and conditions</label>
                    </div>
                    <button 
                        className="form--submit"
                    >
                        Register
                    </button>
                </form>
             </div>
             <div className="flex">
                 <h4>Already have an account?</h4>
                 <Link to="/Login"><h4>Login</h4></Link>
             </div>
        </div>
    )
}

