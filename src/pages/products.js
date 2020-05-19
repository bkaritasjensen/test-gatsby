import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'

class ProductIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    return (
      <Layout>
        <Helmet title={siteTitle} />
        <h1>Products</h1>
      </Layout>
    )
  }
}

export default ProductIndex
