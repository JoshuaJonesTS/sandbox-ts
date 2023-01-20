import React from 'react'

// apollo
import { useQuery } from '@apollo/client'

const WithGqlQuery = ({ component: Component, query, variables = {}, ...rest}) => {

    const { data, loading, error } = useQuery(query, { variables: {...variables}})

    return (<Component data={data} loading={loading} error={error} {...rest} />)
}

export default WithGqlQuery;