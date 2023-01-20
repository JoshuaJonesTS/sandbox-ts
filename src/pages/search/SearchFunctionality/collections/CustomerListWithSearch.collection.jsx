
import React, { useState } from 'react';
import { Container, Box } from '@mui/system';

// block groups
import TableWithSearch from '../../../../blockGroups/table/TableWithSearch/TableWithSearch.blockgroup';

// algorithms
import { filterDataObjectListBySearch } from '../../../../shared/filtering/search';

// SAMPLE DATA
const sampleCustomerDataObjects = [
    {
        id: 1,
        firstName: 'Albert',
        lastName: 'Planida',
        age: 26
    },
    {
        id: 2,
        firstName: 'Joshua',
        lastName: 'Jones',
        age: 26
    },
    {
        id: 3,
        firstName: 'Andrew',
        lastName: 'Fassari',
        age: 35
    }
];

// For Search Dropdown
const customerFieldOptions = [
    { value: 'age', title: 'Age'},
    { value: 'firstName', title: 'First Name'},
    { value: 'lastName', title: 'Last Name'},
    { value: 'street1', title: 'Street'}
]

// For the table
const customerTableColumnConfigs = [
    { 
        name: "id",
        title: "ID",
        objectFieldsToDisplay: ["id"],
        objectFieldsDelimeter: "",
        width: 50
    },
    { 
        name: "name",
        title: "Name",
        objectFieldsToDisplay: ["firstName", "lastName"],
        objectFieldsDelimeter: " ",
        width: 300
    },
    { 
        name: "age",
        title: "Age",
        objectFieldsToDisplay: ["age"],
        objectFieldsDelimeter: "",
        width: 100
    },
]

const CustomerListWithSearch = ({ rawData = [], loading, error }) => {

    return (<TableWithSearch 
            rawData={rawData}
            loading={loading}
            error={error}
            searchFieldOptions={customerFieldOptions}
            columnConfigs={customerTableColumnConfigs}
        />)
}

export default CustomerListWithSearch;