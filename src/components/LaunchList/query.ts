import {gql} from '@apollo/client';
import {Rocket} from '../models/RocketModel';

export interface RocketData {
  rockets: Rocket[];
}

export const QUERY_LAUNCH_LIST = gql`
  query {
    rockets {
      id,
      rocket_id,
      rocket_name
    }
  }
`;
