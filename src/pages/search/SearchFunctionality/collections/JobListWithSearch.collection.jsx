import React from 'react';

// block groups
import TableWithSearch from '../../../../blockGroups/table/TableWithSearch/TableWithSearch.blockgroup';

const jobSearchFieldOptions = [
    { value: "number", title: "#"},
    { value: "name", title: "Name"}
]

const jobTableColumnConfigs = [
    {
        name: "number",
        title: "#",
        objectFieldsToDisplay: ["number"],
        objectFieldsDelimeter: "",
        width: 100,
        useNestedObject: false
    },
    {
        name: "name",
        title: "Name",
        objectFieldsToDisplay: ["name"],
        objectFieldsDelimeter: "",
        width: 200,
        useNestedObject: false
    },
    {
        name: "customer",
        title: "Customer",
        objectFieldsToDisplay: ["customer.name"],
        objectFieldsDelimeter: "",
        width: 200,
        useNestedObject: true
    },
    {
        name: "Organization",
        title: "Organization",
        objectFieldsToDisplay: ["customer.organization.name"],
        objectFieldsDelimeter: "",
        width: 200,
        useNestedObject: true
    },
    {
        name: "details",
        title: "Details",
        objectFieldsToDisplay: ["customer.name", "customer.organization.name"],
        objectFieldsDelimeter: " - ",
        width: 400,
        useNestedObject: true
    },
]

const sampleJobData = [
    {
        id: 1,
        number: "0001",
        name: "Target",
        customer: {
            name: "John Smith",
            organization: {
                name: "Costco Global LTD"
            }
        }
    },
    {
        id: 2,
        number: "0002",
        name: "WalMart",
        customer: {
            name: "John Smith",
            organization: {
                name: "Costco Global LTD"
            }
        }
    },
    {
        id: 3,
        number: "0003",
        name: "T.J. Max",
        customer: {
            name: "John Smith",
            organization: {
                name: "Costco Global LTD"
            }
        }
    },
    {
        id: 4,
        number: "0004",
        name: "Costco",
        customer: {
            name: "John Smith",
            organization: {
                name: "Costco Global LTD"
            }
        }
    },
    {
        id: 5,
        number: "0005",
        name: "Best Buy",
        customer: {
            name: "John Smith",
            organization: {
                name: "Costco Global LTD"
            }
        }
    },
    {
        id: 6,
        number: "0006",
        name: "Kohl's",
        customer: {
            name: "John Smith",
            organization: {
                name: "Costco Global LTD"
            }
        }
    }
]

const JobListWithSearch = (data = { allJobs: [...sampleJobData]}, loading, error) => {

    return (<TableWithSearch 
        rawData={data.allJobs}
        loading={loading}
        error={error}
        searchFieldOptions={jobSearchFieldOptions}
        columnConfigs={jobTableColumnConfigs}
        />)
}

export default JobListWithSearch;