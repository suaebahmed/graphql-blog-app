import React from "react"
// import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import { Row, Col } from 'reactstrap'
import Sidebar from "./Sidebar"
import Footer from "./Footer"

const Layout = ({ children }) => {

  return (
    <>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
        integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
        crossOrigin="anonymous"
      />
      <Header/>
      <div className="container" id="content">
          {/* <h1>{pageTitle}</h1> */}
          <Row>
            <Col md="8">{children}</Col>
            <Col md="4">
              {/* <Sidebar author={postAuthor} authorFluid={authorImageFluid} /> */}
              <Sidebar/>
            </Col>
          </Row>
        </div>
        <Footer/>
    </>
  )
}


export default Layout;