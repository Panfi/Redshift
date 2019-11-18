import  gql  from 'graphql-tag';

const subscribe = gql`
  mutation subscribe($input: SubscriberInput!) {
    subscribe(input: $input) {
        _id
        email
    }
  }
`;

export { subscribe };