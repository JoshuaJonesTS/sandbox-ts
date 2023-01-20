/*
    This is a block group that allows a user to set their search criteria on WHAT to search for
    as well as WHERE to search for it.
*/

import React, { useState } from 'react';

// mui components
import { Grid, Button, TextField, MenuItem } from '@mui/material';

const SearchField = ({ fieldOptions = [{ value: 'none', title: 'None'}], onSearchClicked }) => {

    // Props
    // onSearchClicked is a prop that holds the callback function to be executed when the Search Button is Clicked.
    // fieldOptions is the list of fields that can be searched through, which will be displayed in the "searchBy" dropdown.

    const [searchValue, setSearchValue] = useState("")
    const [searchValueError, setSearchValueError] = useState(false)
    const [searchBy, setSearchBy] = useState("")
    const [searchByError, setSearchByError] = useState(false)
    
    const handleSearchClicked = (e) => {
        e.preventDefault()

        console.log(searchValue)
        console.log(searchBy)

        // make sure that both fields have values and are not empty
        if(searchBy === "") {
            setSearchByError(true)
            if(searchValue === "") {
                setSearchValueError(true)
            }
        } 
        else {
            onSearchClicked(searchValue, searchBy)
            setSearchByError(false)
            setSearchValueError(false)
        }
    }
    

    return (<Grid container spacing={2}>
        {/* Input Field */}
        <Grid item xs={4}>
            <TextField 
            variant="outlined" 
            size={'small'} 
            error={searchValueError}
            fullWidth 
            onChange={(e) => setSearchValue(e.target.value)} />
        </Grid>
       
        {/* Filter By Field - Dropdown */}
        <Grid item xs={2}>
            <TextField 
            select
            label="Search By"
            size={'small'}
            error={searchByError}
            onChange={(e) => setSearchBy(e.target.value)}
            fullWidth>
                {
                    fieldOptions.map(option => {
                        return (<MenuItem value={option.value}>{option.title}</MenuItem>)
                    })
                }
            </TextField>
        </Grid>
        
        {/* Search Button */}
        <Grid item xs={2} alignItems='stretch'>
            <Button variant='contained' size={'large'} onClick={handleSearchClicked}>Search</Button>
        </Grid>
    </Grid>)
}

export default SearchField;