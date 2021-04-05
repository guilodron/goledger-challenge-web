import React from 'react'
import { Container } from './styles'

const AddButton = ({addName, callback}) => {
    return (
        <Container onClick={callback}>
            + Add {addName}
        </Container>
    )
}

export default AddButton
