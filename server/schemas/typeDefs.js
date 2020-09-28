// import the gql tagged template function
const { gql } = require('apollo-server-express');

// const typeDefs = gql`
//   type Query {
//     helloWorld: String
//   }
// `;

// // create our typeDefs
const typeDefs = gql`

type Book {

  bookId: ID
  authors: [String]
  description: String
  title: String
  image: String
  link: String
}

type User {
  _id: ID
  username: String
  email: String
  password: String
  bookCount: Int
  savedBooks: [Book]
}

type Auth {
  token: ID!
  user: User
}

type Query {
  me: User
}

`;


// type Mutation {
//   LOGIN_USER(email: String!, password: String!): Auth
//   ADD_USER(username: String!, email: String!, password: String!): Auth
//   SAVE_BOOK(Book: String!): User
//   REMOVE_BOOK(bookId: ID!): User
// }



// export the typeDefs
module.exports = typeDefs;