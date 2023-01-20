import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

import { createTableData } from './BaseTable.blockgroup.utils';

// Sample Data - Relects the expected format for rows and cols



const BaseTable = ({ rawData = [], columnConfigs = [], loading = false }) => {

    // Use the column configurations and the raw data to create columns and rows for the table
    const tableData = {...createTableData(columnConfigs, rawData)}

    return (<DataGrid rows={tableData.rows} columns={tableData.columns} loading={loading} />)
}

export default BaseTable;