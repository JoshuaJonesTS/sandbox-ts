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
    },
    {
        name: "moon",
        title: "Largest Moon (LM)",
        objectFieldsToDisplay: ["largestMoon.name"],
        objectFieldsDelimiter: "",
        width: 142,
        useNestedObject: true
    },
    {
        name: "diameter",
        title: "LM Diameter",
        objectFieldsToDisplay: ["largestMoon.size.diameter"],
        objectFieldsDelimiter: "",
        width: 100,
        useNestedObject: true
    }
];

const samplePlanetData = [
    {
        id: 1,
        name: "Mercury",
        type: "rocky",
        largestMoon: {
            name: null,
            size: {
                diameter: null,
                mass: null
            }
        }
    },
    {
        id: 2,
        name: "Venus",
        type: "rocky",
        largestMoon: {
            name: null,
            size: {
                diameter: null,
                mass: null
            }
        }
    },
    {
        id: 3,
        name: "Earth",
        type: "rocky",
        largestMoon: {
            name: "Moon",
            size: {
                diameter: 2159.1, // miles
                mass: 7.35e22 // kg
            }
        }
    },
    {
        id: 4,
        name: "Mars",
        type: "rocky",
        largestMoon: {
            name: "Phobos",
            size: {
                diameter: 14.002,
                mass: 10.6e15
            }
        }
    },
    {
        id: 5,
        name: "Jupiter",
        type: "gas",
        largestMoon: {
            name: "Ganymede",
            size: {
                diameter: 3273.5,
                mass: 1.48e23
            }
        }
    },
    {
        id: 6,
        name: "Saturn",
        type: "gas",
        largestMoon: {
            name: "Titan",
            size: {
                diameter: 3199.7,
                mass: 1.34e23
            }
        }
    },
    {
        id: 7,
        name: "Uranus",
        type: "gas",
        largestMoon: {
            name: "Titania",
            size: {
                diameter: 970.78,
                mass: 3.4e21
            }
        }
    },
    {
        id: 8,
        name: "Neptune",
        type: "gas",
        largestMoon: {
            name: "Triton",
            size: {
                diameter: 1681.9,
                mass: 2.14e22
            }
        }
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