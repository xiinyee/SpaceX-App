import {gql} from '@apollo/client';

export const QUERY_ROCKET_LIST = gql`
  query {
    rockets {
      id,
      rocket_id,
      rocket_name
    }
  }
`;
