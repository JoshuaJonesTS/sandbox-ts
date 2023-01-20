import React from 'react';

// block groups
import TableWithSearch from '../../../../blockGroups/table/TableWithSearch/TableWithSearch.blockgroup';

const PlanetListWithSearch = (data = {}, loading, error) => {
    return(
        <TableWithSearch
            rawData={}
            loading={loading}
            error={error}
            fieldOptions={}
            columnConfigs={}
        />
    )
}

export default PlanetListWithSearch;