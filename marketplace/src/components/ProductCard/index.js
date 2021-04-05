import { Container } from "./styles"

import {
    FaPencilAlt, FaTrashAlt
} from 'react-icons/fa';

const ProductCard = ({productName, price, seller}) => {
    return (
        <Container>
            <div className="nameSeller">
                <span>{productName}</span>
                <span>{seller || 'Vendedor nao informado'}</span>
            </div>
            <strong>R${price},00</strong>
            <div className="icons">
                <FaTrashAlt/>
                <FaPencilAlt />
            </div>
        </Container>
    )
}

export default ProductCard
