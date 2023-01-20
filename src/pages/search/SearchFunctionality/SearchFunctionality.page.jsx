import React from 'react';

// apollo
import { ALL_CUSTOMERS_QUERY } from '../../../graphql/customer/customer.queries';
import { ALL_JOBS_QUERY } from '../../../graphql/job/job.queries';
// collections
import CustomerListWithSearch from './collections/CustomerListWithSearch.collection';
import CustomerList from './collections/CustomerList.collection';
import JobListWithSearch from './collections/JobListWithSearch.collection';

// wrappers
import WithGqlQuery from '../../../wrappers/gql/WithGqlQuery/WithGqlQuery.wrapper';

const SearchFunctionality = () => {

    return (<div>

        {/* Collections using the Abastract BlockGroups */}
        <WithGqlQuery component={JobListWithSearch} query={ALL_JOBS_QUERY} />
        {/* Basic Collections 
        <WithGqlQuery component={CustomerListWithSearch} query={ALL_CUSTOMERS_QUERY} />
        <WithGqlQuery component={CustomerList} query={ALL_CUSTOMERS_QUERY} />
        */}
    </div>)
}

export default SearchFunctionality;