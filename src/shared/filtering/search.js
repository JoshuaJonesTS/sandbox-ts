// Requirements
// Based on a user’s search criteria, filter a list of objects and return the results.


export const filterDataObjectListBySearch = (rawDataObjects, searchValue, searchBy, onResultsFiltered) => {
    // Input
    // Search Value (what does the user want to be searching for?)
    console.log(`Search Value: ${searchValue}`)
    // Search By (where does the user want to be searching?)
    console.log(`Search By: ${searchBy}`)
    // Variables
    // a storage place for the search results
    let filteredResults = []

    // Algorithm
    // Step #1 - Loop through the list of objects and do the following on each object:
    rawDataObjects.forEach(dataObject => {
        // Step #2 - Retrieve the value inside of the object that corresponds with the Search Field specified by the user. (For example, if the search field is “age”, then get the “age” value inside of the object)
        
        // Step #3 - Check if the value inside of the object CONTAINS the user's search value.
        if(dataObject[searchBy].toString().toLowerCase().includes(searchValue.toLowerCase())) {
            // Step #3a - If it matches, add the object to the search results list
            filteredResults.push({...dataObject})
        }
    })

    onResultsFiltered([...filteredResults])
}  