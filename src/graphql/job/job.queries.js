import { gql } from "@apollo/client";

export const ALL_JOBS_QUERY = gql`
query {
    allJobs {
        id
        number
        name
    }
}
`