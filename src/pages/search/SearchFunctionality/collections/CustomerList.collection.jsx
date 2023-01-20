
import React from 'react';
import { Container, Box } from '@mui/system';

// block groups
import BaseTable from '../../../../blockGroups/table/BaseTable/BaseTable.blockgroup';


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

const CustomerList = ({ rawData = [], loading, error }) => {

    // Variables
    // tableColumnConfigs will store the column data for the table prep algorithm
    const tableColumnConfigs = [
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

    // Output
    // A list of either the raw data or results that have been filtered by the user’s search criteria
    return (<Container>
        <Box
        sx={{ height: 500, width: "100%", marginTop: 2 }}
        >
            <BaseTable 
                rawData={rawData}
                columnConfigs={tableColumnConfigs}
                loading={loading}
            />
        </Box>
         
    </Container>)
}

export default CustomerList;

/*
    --- Accessing a key inside an object ---
    customer.key => customer.key and get the value
    customer[key] => customer.age and get the value
    customer['key'] customer.key and get the value
*/