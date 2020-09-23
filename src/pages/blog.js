import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'

const blogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            
                        }
                    }
                }
            }
        }
    `)
    console.log(data)
    return(
        <div>
            <Layout>
                <h1>Blog</h1>
                <p>Posts will show up here. Coming Soon</p>
            </Layout>
        </div>
    )
}

export default blogPage;