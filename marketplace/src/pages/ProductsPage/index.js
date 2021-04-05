import React from 'react'
import AddButton from '../../components/AddButton';
import {
    Container
} from './styles';
import ProductImage from '../../assets/product.svg';
import ProductCard from '../../components/ProductCard';

const ProductsPage = () => {
    return (
        <Container>
            <strong>Products</strong>
            <hr />
            <AddButton addName="product" callback={()=> alert('Bom dia!!')}/>
            <div className="product-display">
                <div className="list">
                    <ProductCard productName="Cama"/>
                    <ProductCard productName="Cama"/>
                    <ProductCard productName="Cama"/>
                    <ProductCard productName="Cama"/>
                    <ProductCard productName="Cama"/>
                    <ProductCard productName="Cama"/>
                    <ProductCard productName="Cama"/>
                    <ProductCard productName="Cama"/>
                    <ProductCard productName="Cama"/>
                    <ProductCard productName="Cama"/>
                    <ProductCard productName="Cama"/>
                    <ProductCard productName="Cama"/>
                    <ProductCard productName="Cama"/>
                    <ProductCard productName="Cama"/>
                    <ProductCard productName="Cama"/>
                    <ProductCard productName="Cama"/>
                </div>
                <img src={ProductImage} alt="Ilustração de produto"/>
            </div>
        </Container>
    )
}

export default ProductsPage;
