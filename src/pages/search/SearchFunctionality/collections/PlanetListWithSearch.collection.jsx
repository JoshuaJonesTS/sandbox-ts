import React from 'react';

// block groups
import TableWithSearch from '../../../../blockGroups/table/TableWithSearch/TableWithSearch.blockgroup';

const PlanetSearchFieldOptions = [
    { value: "name", title: "Name" },
    { value: "id", title: "ID" },
    { value: "type", title: "Type" },
];

const PlanetColumnConfigs = [
    {
        name: "id",
        title: "ID",
        objectFieldsToDisplay: ["id"],
        objectFieldsDelimiter: "",
        width: 100,
        useNestedObject: false
    },
    {
        name: "name",
        title: "Name",
        objectFieldsToDisplay: ["name"],
        objectFieldsDelimiter: "",
        width: 100,
        useNestedObject: false
    },
    {
        name: "type",
        title: "Type",
        objectFieldsToDisplay: ["type"],
        objectFieldsDelimiter: "",
        width: 100,
        useNestedObject: false
    }
];

const samplePlanetData = [
    {
        id: 1,
        name: "Mercury",
        type: "rocky"
    },
    {
        id: 2,
        name: "Venus",
        type: "rocky"
    },
    {
        id: 3,
        name: "Earth",
        type: "rocky"
    },
    {
        id: 4,
        name: "Mars",
        type: "rocky"
    },
    {
        id: 5,
        name: "Jupiter",
        type: "gas"
    },
    {
        id: 6,
        name: "Saturn",
        type: "gas"
    },
    {
        id: 7,
        name: "Uranus",
        type: "gas"
    },
    {
        id: 8,
        name: "Neptune",
        type: "gas"
    },
];

const PlanetListWithSearch = (data = { allPlanets: [...samplePlanetData] }, loading, error) => {
    return(
        <TableWithSearch
            rawData={[...samplePlanetData]}
            loading={false}
            error={error}
            searchFieldOptions={PlanetSearchFieldOptions}
            columnConfigs={PlanetColumnConfigs}
        />
    )
}

export default PlanetListWithSearch;