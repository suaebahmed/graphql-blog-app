import React from "react"
import { graphql , StaticQuery} from "gatsby"
import Layout from "../components/layout"
import Post from "../components/Post"
import '../styles/index.scss'

const IndexPage = () => {
  return (
   <Layout>
      <StaticQuery
    query={query1}
    render={data => {
      console.log(data)
      return (
      <>
       {/* <pre>{JSON.stringify(data, null, 4)}</pre> */} 
        {
          data.allMarkdownRemark.edges.map(({node})=>{
            return (
              <Post 
              key={node.id}
              title={node.frontmatter.title}
              // slug={node.fields.slug}
              author={node.frontmatter.author}
              body={node.excerpt}
              date={node.frontmatter.date}
              fluid={node.frontmatter.image.childImageSharp.fluid}
              tags={node.frontmatter.tags}
              />
            )
          })
        }
      </>
      )
    }}
  ></StaticQuery>
   </Layout>
  )
}

const query1 = graphql`
{
  allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }
    limit: 3
  ){
    edges {
      node {
        id
        frontmatter {
          title
          author
          path
          date(formatString: "MMM Do YYYY")
          tags
          image {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        excerpt
      }
    }
  }
}
`
export default IndexPage
