import { gql } from "@apollo/client";

export const ALL_CUSTOMERS_QUERY = gql`
query {
    allCustomers {
        id
    }
}
`