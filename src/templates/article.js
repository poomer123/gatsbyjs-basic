import React from 'react'
import { graphql } from 'gatsby'

export default function ({ data }) {
    return <div>
        <h1 className="title">{data.markdownRemark.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
        <p>{data.markdownRemark.frontmatter.date}</p>
    </div>
}

export const query = graphql`
    query($filePath: String!) {
        markdownRemark(fileAbsolutePath: {eq: $filePath}) {
            frontmatter {
                title
                date
            }
            html
        }
    }    
`