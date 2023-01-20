
import React, { useState } from 'react';
import { Container, Box } from '@mui/system';

// block groups
import SearchField from '../../../blockGroups/search/SearchField/SearchField.blockgroup';
import BaseTable from '../BaseTable/BaseTable.blockgroup';

// algorithms
import { filterDataObjectListBySearch } from '../../../shared/filtering/search';
// SAMPLE DATA
const sampleDataObjects = [
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

const sampleFieldOptions = [
    { value: 'age', title: 'Age'},
    { value: 'firstName', title: 'First Name'},
    { value: 'lastName', title: 'Last Name'},
    { value: 'street1', title: 'Street'}
]

// tableColumnConfigs will store the column data for the table prep algorithm
const sampleTableColumnConfigs = [
    { 
        name: "id",
        title: "ID",
        objectFieldsToDisplay: ["id"],
        objectFieldsDelimeter: "",
        width: 50,
        useNestedObject: false
    },
    { 
        name: "name",
        title: "Name",
        objectFieldsToDisplay: ["firstName", "lastName"],
        objectFieldsDelimeter: " ",
        width: 300,
        useNestedObject: false
    },
    { 
        name: "age",
        title: "Age",
        objectFieldsToDisplay: ["age"],
        objectFieldsDelimeter: "",
        width: 100,
        useNestedObject: false
    },
    { 
        name: "job",
        title: "Job",
        objectFieldsToDisplay: ["job.name"],
        objectFieldsDelimeter: "",
        width: 100,
        useNestedObject: true
    },
]

const TableWithSearch = ({ rawData = [], loading, searchFieldOptions = [], columnConfigs = [], error }) => {

    // Variables
    // results will store the filtered results of a search executed by the user
    const [results, setResults] = useState()
    

    // triggered when Search Button is clicked
    const handleSearchClicked = (searchValue, searchBy) => {
        // algorithm that will filter a list of objects based on search criteria and return the results
        filterDataObjectListBySearch(rawData, searchValue, searchBy, (filteredResults) => {
            // callback function that executes once the data has been filtered
            setResults([...filteredResults])
        })
    }

    console.log("TableWithSearch")
    console.log(rawData)
    // Output
    // A list of either the raw data or results that have been filtered by the user’s search criteria
    return (<Container>
        <SearchField 
            fieldOptions={searchFieldOptions}
            onSearchClicked={handleSearchClicked}
        />
        <Box
        sx={{ height: 500, width: "100%", marginTop: 2 }}
        >
            <BaseTable 
                rawData={results ? results : rawData}
                columnConfigs={columnConfigs}
                loading={loading}
            />
        </Box>
         
    </Container>)
}

export default TableWithSearch;