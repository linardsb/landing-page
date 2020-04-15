import React from 'react'
import { Link } from 'gatsby'

import './ContactStyle.css'

export default function Contact() {
    return (
         <div className="formcontainer">
            <form>
                
                    <label htmlFor="name">
                        First name
                    </label>
                    <input 
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        placeholder="First name"/>
            

                
                    <label htmlFor="lastname">
                        Last name
                    </label>
                    <input 
                        type="text"
                        className="form-control"
                        name="lastname"
                        id="lastname"
                        placeholder="Last name"/>
             
                
           
                    <label htmlFor="email">
                        Email
                    </label>
                    <input 
                        type="text"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Email"/>
                    <label htmlFor="description">
                       Your message here
                    </label>
                    <textarea name="description" id="description" 
                    className="form-control" placeholder="Your message here..." rows="5"></textarea>

           <div className="cta formcta">
      <button><Link to="/contact">Keep me updated</Link></button>
    </div>
                
            </form>
         </div>
        )
}

