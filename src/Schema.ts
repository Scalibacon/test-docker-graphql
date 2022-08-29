import { gql } from 'apollo-server-express';

const Schema = gql`
  type Person {
    id: ID!
    first_name: String 
    last_name: String 
    email: String 
    gender: String 
    ip_address: String
  }

  type Query {
    getAllPeople: [Person]
    getPerson(id: Int): Person
  }

  type Mutation {
    addPerson(first_name: String!, last_name: String!, email: String, gender: String!, ip_address: String): Person
    updatePerson(id: Int!, first_name: String, last_name: String, email: String, gender: String, ip_address: String): Person
  }
`;

export default Schema;