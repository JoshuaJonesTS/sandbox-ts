import React from 'react';

// block groups
import TableWithSearch from '../../../../blockGroups/table/TableWithSearch/TableWithSearch.blockgroup';

const PlanetSearchFieldOptions = [
    { value: "name", title: "Name" },
    { value: "id", title: "ID" },
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
    }
];

const samplePlanetData = [
    {
        id: 1,
        name: "Mercury"
    },
    {
        id: 2,
        name: "Venus"
    },
    {
        id: 3,
        name: "Earth"
    },
    {
        id: 4,
        name: "Mars"
    },
    {
        id: 5,
        name: "Jupiter"
    },
    {
        id: 6,
        name: "Saturn"
    },
    {
        id: 7,
        name: "Uranus"
    },
    {
        id: 8,
        name: "Neptune"
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