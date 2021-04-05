import { Container } from "./styles"

import {
    FaPencilAlt
} from 'react-icons/fa';

const ProductCard = ({productName}) => {
    return (
        <Container>
            <div className="nameSeller">
                <span>{productName}</span>
                <span>Apple</span>
            </div>
            <strong>R$45,00</strong>
            <FaPencilAlt />
        </Container>
    )
}

export default ProductCard
