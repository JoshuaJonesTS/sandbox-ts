
/*

    columnConfigs expected format:
    Array with a list of columnConfig objects:

    columnConfig:
    {
        name: "id",                                         // the field on the object that this column will fetch
        title: "ID",                                        // the name to be displayed in the header
        objectFieldsToDisplay: ["firstName", "lastName"],   // the fields to concatenate together
        objectFieldsDelimeter: " ",
        width: 150
    }

*/

export function createTableData(columnConfigs, rawDataObjects) {
    let tableData = {
        columns: [],
        rows: []
    }

    // 1. Loop through the list of column configs and add a table column for each one using the title value of each columnConfig.
    columnConfigs.forEach(columnConfig => {
        const column = {
            field: columnConfig.name,
            headerName: columnConfig.title,
            width: columnConfig.width
        }
        tableData.columns.push(column)
    })

    // 2. Loop through the list of raw data and create a new row object for each using the columnConfigs
    rawDataObjects.forEach(dataObject => {
        // 1. Create a new row
        let row = { id: dataObject.id }

        // 2. Loop through the list of columnConfigs and gather the data for that column
        columnConfigs.forEach(columnConfig => {
            let displayValue = ""

            // Loop through each field that may be displayed for that column and put them together into a string
            columnConfig.objectFieldsToDisplay.forEach((fieldKey, index) => {
                if(columnConfig.useNestedObject) {
                    const allNestingKeys = fieldKey.split(".")
                    let currentValue = {...dataObject}
                    allNestingKeys.forEach(nestedKey => {
                        currentValue = currentValue[nestedKey]
                    })
                    console.log(currentValue)
                    displayValue += currentValue + (index === columnConfig.objectFieldsToDisplay.length - 1 ? "" : columnConfig.objectFieldsDelimeter)
                } else {
                    displayValue += dataObject[fieldKey] + (index === columnConfig.objectFieldsToDisplay.length - 1 ? "" : columnConfig.objectFieldsDelimeter) 
                }
                
            })
            // assign the new display text to the correct field in the new row object
            row[columnConfig.name] = displayValue
        })

        tableData.rows.push(row)
    })

    console.log(tableData)

    return tableData

}