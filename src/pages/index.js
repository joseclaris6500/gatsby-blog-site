import React from "react"
import { Link } from 'gatsby'

import Layout from '../components/layout'

//React component
const indexPage = () => {
  return(
    <Layout>
      <h1>Hello BOYZZZZZ</h1>
      <h2>Full-Stack Developer. Living in Austin</h2>
      <p>Need a super groovy developer? <Link to="/contact">Contact Me</Link></p>
    </Layout>
  )
}


export default indexPage