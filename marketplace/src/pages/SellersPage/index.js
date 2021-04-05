import React from 'react'
import AddButton from '../../components/AddButton';
import {
    Container
} from './styles';
import SellerImage from '../../assets/seller.svg';
import SellerCard from '../../components/SellerCard';

const SellersPage = () => {
    return (
        <Container>
            <strong>Sellers</strong>
            <hr />
            <AddButton addName="product" callback={()=> alert('Bom dia!!')}/>
            <div className="product-display">
                <div className="list">
                    <SellerCard address="avenida dos coqueiros 2" cnpj="07.357.036/0001-76" sellerName="Apple" />
                    <SellerCard address="avenida dos coqueiros 2" cnpj="07.357.036/0001-76" sellerName="Apple" />
                    <SellerCard address="avenida dos coqueiros 2" cnpj="07.357.036/0001-76" sellerName="Apple" />
                    <SellerCard address="avenida dos coqueiros 2" cnpj="07.357.036/0001-76" sellerName="Apple" />
                    <SellerCard address="avenida dos coqueiros 2" cnpj="07.357.036/0001-76" sellerName="Apple" />
                    <SellerCard address="avenida dos coqueiros 2" cnpj="07.357.036/0001-76" sellerName="Apple" />
                    <SellerCard address="avenida dos coqueiros 2" cnpj="07.357.036/0001-76" sellerName="Apple" />
                    <SellerCard address="avenida dos coqueiros 2" cnpj="07.357.036/0001-76" sellerName="Apple" />
                </div>
                <img src={SellerImage} alt="Ilustração de produto"/>
            </div>
        </Container>
    )
}

export default SellersPage;
