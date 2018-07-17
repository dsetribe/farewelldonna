import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Hero from '../components/hero'

class RootIndex extends React.Component {
  render() {
    const [author] = get(this, 'props.data.allContentfulPerson.edges')

    return (
      <div style={{ background: '#fff' }}>
        <Hero person={author} />
      </div>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulPerson(filter: { id: { eq: "c15jwOBqpxqSAOy2eOO4S0m" } }) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          image {
            file {
              url
              fileName
              contentType
            }
          }
        }
      }
    }
  }
`
