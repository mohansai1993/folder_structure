import { gql } from "@apollo/client";

const SendOtpVerification = gql`
  mutation SendVerificationOtp($email: String, $password: String) {
    sendVerificationOtp(email: $email, password: $password)
  }
`;

const Register = gql`
  mutation RegisterOwner($email: String, $otp: Int, $password: String) {
    registerOwner(email: $email, otp: $otp, password: $password) {
      id
      firstName
      lastName
      email
      password
      profilePicture
      createdAt
      updatedAt
    }
  }
`;

const AddProperty = gql`
  mutation AddProperty(
    $name: String
    $street1: String
    $street2: String
    $city: String
    $zip: String
    $ownerId: ID
    $state: String
  ) {
    addProperty(
      name: $name
      street1: $street1
      street2: $street2
      city: $city
      zip: $zip
      ownerId: $ownerId
      state: $state
    ) {
      id
    }
  }
`;
const UpdateProperty = gql`
  mutation UpdateProperty(
    $name: String
    $propertyId: ID
    $street1: String
    $city: String
    $street2: String
    $state: String
    $zip: String
    $managerName: String
    $managerEmail: String
    $managerPhone: String
    $bankAccountNickname: String
    $bankAccountName: String
    $bankAccountNumber: String
    $bankRoutingNumber: String
    $bankAccountAddress1: String
    $bankCity: String
    $bankAccountAddress2: String
    $bankState: String
    $bankZip: String
  ) {
    updateProperty(
      name: $name
      propertyId: $propertyId
      street1: $street1
      city: $city
      street2: $street2
      state: $state
      zip: $zip
      managerName: $managerName
      managerEmail: $managerEmail
      managerPhone: $managerPhone
      bankAccountNickname: $bankAccountNickname
      bankAccountName: $bankAccountName
      bankAccountNumber: $bankAccountNumber
      bankRoutingNumber: $bankRoutingNumber
      bankAccountAddress1: $bankAccountAddress1
      bankCity: $bankCity
      bankAccountAddress2: $bankAccountAddress2
      bankState: $bankState
      bankZip: $bankZip
    ) {
      city
    }
  }
`;
const AddManager = gql`
  mutation AddManager(
    $name: String
    $email: String
    $phone: String
    $propertyId: ID
  ) {
    addManager(
      name: $name
      email: $email
      phone: $phone
      propertyId: $propertyId
    ) {
      name
    }
  }
`;

const DeleteOwner = gql`
  mutation DeleteOwner($ownerId: ID) {
    deleteOwner(ownerId: $ownerId)
  }
`;
const AddBankDetails = gql`
  mutation AddBankDetails(
    $propertyId: ID
    $bankAccountAddress: String
    $bankZip: String
    $bankState: String
    $bankCity: String
    $bankAccountAddress2: String
    $bankAccountAddress1: String
    $bankRoutingNumber: String
    $bankAccountNumber: String
    $bankAccountName: String
    $bankAccountNickname: String
  ) {
    addBankDetails(
      propertyId: $propertyId
      bankAccountAddress: $bankAccountAddress
      bankZip: $bankZip
      bankState: $bankState
      bankCity: $bankCity
      bankAccountAddress2: $bankAccountAddress2
      bankAccountAddress1: $bankAccountAddress1
      bankRoutingNumber: $bankRoutingNumber
      bankAccountNumber: $bankAccountNumber
      bankAccountName: $bankAccountName
      bankAccountNickname: $bankAccountNickname
    ) {
      id
      name
      street1
      street2
      city
      state
      zip
    }
  }
`;
export {
  SendOtpVerification,
  Register,
  AddProperty,
  UpdateProperty,
  AddManager,
  AddBankDetails,
  DeleteOwner,
};
