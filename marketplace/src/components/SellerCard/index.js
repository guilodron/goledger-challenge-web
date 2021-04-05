import { Container } from "./styles"

import {
    FaPencilAlt
} from 'react-icons/fa';

const ProductCard = ({sellerName, address, cnpj}) => {
    return (
        <Container>
            <div className="nameSeller">
                <span>{sellerName}</span>
                <span>{address}</span>
            </div>
            <strong>{cnpj}</strong>
            <FaPencilAlt />
        </Container>
    )
}

export default ProductCard
