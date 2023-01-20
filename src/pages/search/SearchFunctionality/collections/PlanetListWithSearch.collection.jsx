import React from 'react';

// block groups
import TableWithSearch from '../../../../blockGroups/table/TableWithSearch/TableWithSearch.blockgroup';

const PlanetSearchFieldOptions = [
    { value: "id", title: "ID" },
    { value: "name", title: "Name" }
];

const PlanetListWithSearch = (data = { allPlanets: [] }, loading, error) => {
    return(
        <TableWithSearch
            rawData={data.allPlanets}
            loading={loading}
            error={error}
            fieldOptions={}
            columnConfigs={}
        />
    )
}

export default PlanetListWithSearch;