import React from 'react'

import './ContactStyle.css'

export default function Contact() {
    return (
         <div className="formcontainer" id="form-link">
            <div className="footergroup"><p>If you wish to receive more information on our product or have any questions, consider signing up for updates.</p></div>
            <form className="form" action="https://formspree.io/mnqbwlno" method="POST">
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
                        <button type="submit">Keep me updated</button>
                    </div>
            </form>
         </div>
        )
}

