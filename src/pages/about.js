import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'


const aboutPage = () => {
    return(
        <div>
            <Layout>
                <title>About Me</title>
                <h1>About Me</h1>
                <p>There's a lot to learn about me that it needs a interview to get the full picture</p>
                <p>Need a super groovy developer? <Link to="/contact">Contact Me</Link></p>
            </Layout>
        </div>
    )   
}

export default aboutPage
