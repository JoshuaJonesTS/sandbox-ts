import React from 'react';

// block groups
import TableWithSearch from '../../../../blockGroups/table/TableWithSearch/TableWithSearch.blockgroup';

const PlanetSearchFieldOptions = [
    { value: "id", title: "ID" },
    { value: "name", title: "Name" }
];

const PlanetColumnConfigs = [
    {
        name: "id",
        title: "ID",
        objectFieldsTODisplay: ["id"],
        objectFieldsDelimiter: "",
        width: 100,
        useNestedObject: false
    },
    {
        name: "name",
        title: "Name",
        objectFieldsTODisplay: ["name"],
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
    }
];

const PlanetListWithSearch = (data = { allPlanets: [...samplePlanetData] }, loading, error) => {
    return(
        <TableWithSearch
            rawData={[...samplePlanetData]}
            loading={loading}
            error={error}
            searchFieldOptions={PlanetSearchFieldOptions}
            columnConfigs={PlanetColumnConfigs}
        />
    )
}

export default PlanetListWithSearch;