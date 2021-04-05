import { Container } from "./styles"
import {
    FaPencilAlt,
    FaTrashAlt
} from 'react-icons/fa';

const CategoryCard = ({nome}) => {

    return (
        <Container>
            <span>{nome}</span>
            <div className="icons">
                <FaTrashAlt/>
                <FaPencilAlt />
            </div>
        </Container>
    )
}

export default CategoryCard
