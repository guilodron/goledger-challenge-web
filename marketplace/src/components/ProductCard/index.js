import { Container } from "./styles"

import {
    FaPencilAlt
} from 'react-icons/fa';

const ProductCard = ({productName, price, seller}) => {
    return (
        <Container>
            <div className="nameSeller">
                <span>{productName}</span>
                <span>{seller || 'Vendedor nao informado'}</span>
            </div>
            <strong>R${price},00</strong>
            <FaPencilAlt />
        </Container>
    )
}

export default ProductCard
