import React, { useContext } from 'react'
import AddButton from '../../components/AddButton';
import {
    Container
} from './styles';
import SellerImage from '../../assets/seller.svg';
import SellerCard from '../../components/SellerCard';
import { GeneralContext } from '../../hooks/generalHook';

const SellersPage = () => {

    const generalContext = useContext(GeneralContext);

    return (
        <Container>
            <strong>Sellers</strong>
            <hr />
            <AddButton addName="product" callback={()=> alert('Bom dia!!')}/>
            <div className="product-display">
                <div className="list">
                    {generalContext.sellers.map(seller => (
                        <SellerCard key={seller['@key']} address={seller.address} cnpj={seller.cnpj} sellerName={seller.name} />
                    ))}
                </div>
                <img src={SellerImage} alt="Ilustração de produto"/>
            </div>
        </Container>
    )
}

export default SellersPage;
