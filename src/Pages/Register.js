import React from "react"
import "../css/register.css"

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
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}

