import { gql } from 'apollo-server-micro'

export const typeDefs = gql`
  type User {
    first_name: String
    last_name: String
    role: String
  }

  type Query {
    users: [User]!
  }
`
