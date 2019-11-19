import  gql  from 'graphql-tag';

const contact = gql`
  mutation contact($input: ContactInput!) {
    contact(input: $input) {
        _id
        type
        name
        email
        message
    }
  }
`;

export { contact };