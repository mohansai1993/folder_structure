import { gql } from "@apollo/client";

const LoginAuth = gql`
  query Login($email: String, $password: String) {
    login(email: $email, password: $password) {
      email
      createdAt
      id
      lastName
      firstName
      profilePicture
    }
  }
`;

const GetOwners = gql`
  query GetOwners {
    getOwners {
      id
      firstName
      lastName
      email
      password
      profilePicture
      createdAt
      updatedAt
      planExpiryDate
    }
  }
`;
const GetProperties = gql`
  query GetProperties {
    getProperties {
      name
      city
      state
      amenities
      createdAt
      zip
    }
  }
`;
export { LoginAuth, GetOwners, GetProperties };
