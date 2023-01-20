import React from 'react';

// block groups
import TableWithSearch from '../../../../blockGroups/table/TableWithSearch/TableWithSearch.blockgroup';

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