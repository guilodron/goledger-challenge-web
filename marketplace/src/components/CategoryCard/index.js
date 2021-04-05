import { Container } from "./styles"

import {
    FaPencilAlt
} from 'react-icons/fa';

const CategoryCard = ({nome}) => {
    return (
        <Container>
            <span>{nome}</span>
            <FaPencilAlt />
        </Container>
    )
}

export default CategoryCard
