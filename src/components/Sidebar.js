import React from 'react'
import { Card, CardBody, CardTitle,Form, FormGroup, Input } from 'reactstrap'
import Img from 'gatsby-image'
import { StaticQuery, graphql, Link } from 'gatsby'


function Sidebar() {
    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle className="text-center text-uppercase">
                        newsTitle
                    </CardTitle>
                    <Form action="/" className="text-center">
                        <FormGroup>
                            <Input 
                            type="text"
                            name="email"
                            placeholder="Enter email address.."
                            />
                            <button className="btn btn-outline-success text-uppercase mt-3">
                                Subscribe
                            </button>
                        </FormGroup>
                    </Form>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <CardTitle className="text-center text-uppercase">
                    Advertisement
                    </CardTitle>
                    <img
                    src="https://via.placeholder.com/320x200"
                    alt="Advert"
                    style={{ width: '100%' }}
                    />
                </CardBody>
            </Card>

            <Card>
            <StaticQuery query={sidebarQuery} render={data=>{
                    const isPost = data.allMarkdownRemark.edges.map(({node})=>{
                        return (
                            <>
                                <Link>
                                    <Img className="card-img-top" fluid={node.frontmatter.image.childImageSharp.fluid}></Img>
                                </Link>
                                <CardBody>
                                    <CardTitle>
                                        <Link to="/">{node.frontmatter.title}</Link>
                                    </CardTitle>
                                </CardBody>
                            </>
                        )
                    })
                    return (
                        <div>
                            <CardTitle className="text-center text-uppercase pt-3 pb-1">
                                RECENT POSTS
                            </CardTitle>
                            {isPost}
                        </div>
                    )
                }}>
                </StaticQuery>
            </Card>
        </div>
    )
}
const sidebarQuery = graphql`
{
allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }
    limit: 2
  ) {
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "MMM Do YYYY")
          author
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
}`
export default Sidebar;
