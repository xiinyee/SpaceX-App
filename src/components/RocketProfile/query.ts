import {gql} from '@apollo/client';

export const QUERY_ROCKET_PROFILE = gql`
  query RocketProfile($id: String!) {
    rockets(id: $id) {
      id
      rocket_id
      rocket_name
      rocket_type
      active
      company
      country
      description
      flickr_images
      mass {
        kg
      }
      height {
        meters
      }
      engines {
        type
        version
      }
    }
  }
`;
