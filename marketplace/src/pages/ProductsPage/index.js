import React, { useContext } from 'react'
import AddButton from '../../components/AddButton';
import {
    Container
} from './styles';
import ProductImage from '../../assets/product.svg';
import ProductCard from '../../components/ProductCard';
import { GeneralContext } from '../../hooks/generalHook';

const ProductsPage = () => {
    const generalContext = useContext(GeneralContext);
    return (
        <Container>
            <strong>Products</strong>
            <hr />
            <AddButton addName="product" callback={()=> alert('Bom dia!!')}/>
            <div className="product-display">
                <div className="list">
                    {generalContext.products.map(product => (
                        <ProductCard productName={product.name} price={product.price} key={product['@key']} seller={product.seller?.name} />
                    ))}            
                </div>
                <img src={ProductImage} alt="Ilustração de produto"/>
            </div>
        </Container>
    )
}

export default ProductsPage;
