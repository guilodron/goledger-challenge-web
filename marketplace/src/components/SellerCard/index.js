import { Container } from "./styles"

import {
    FaPencilAlt, FaTrashAlt
} from 'react-icons/fa';

const ProductCard = ({sellerName, address, cnpj}) => {
    return (
        <Container>
            <div className="nameSeller">
                <span>{sellerName}</span>
                <span>{address}</span>
            </div>
            <strong>{cnpj}</strong>
            <div className="icons">
                <FaTrashAlt/>
                <FaPencilAlt />
            </div>
        </Container>
    )
}

export default ProductCard
