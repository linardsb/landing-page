import React from 'react'
import styled from 'styled-components'

import { Link } from 'gatsby'

const FooterGroup = styled.div`
    background: #f0f3f7;
    padding: 30px 100px 0;
`

const Text = styled.p`
    color: #182736;
    font-size: 16px;
    margin: 0 auto;
    max-width: 500px;
    text-align: center;
    padding: 30px 0 45px 0;
`


const Footer = () => (
   <FooterGroup>
       <div className="cta">
        <button><Link to="/contact">Receive email</Link></button>
        </div>
       <Text>If you wish to receive more information on our product, consider signing up for updates.</Text>
   </FooterGroup>
)

export default Footer
