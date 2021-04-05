import {useContext} from 'react';
import {GeneralContext} from '../../hooks/generalHook';
import DashboardImage from '../../assets/dashboard.svg';
import CategoryCard from '../../components/CategoryCard';
import { Container } from './styles';
import {Link} from 'react-router-dom';
import ProductCard from '../../components/ProductCard';
import SellerCard from '../../components/SellerCard';

const Dashboard = () => {

    const generalContext = useContext(GeneralContext);
    const firstCategories = generalContext.categories.slice(0, 3);
    const firstSellers = generalContext.sellers.slice(0, 3);
    const firstProducts = generalContext.products.slice(0, 3);

    return (
        <Container>
            <strong>Dashboard</strong>
            <hr />
            <div className="boxes">
                <img src={DashboardImage} alt=""/>
                <div className="Box">
                    <span>Categories</span>
                    {firstCategories.map(category => (
                        <CategoryCard nome={category.name} key={category['@key']} />
                    ))}
                    <Link to="categories">Ver todos</Link>
                </div>
                <div className="Box">
                    <span>Products</span>
                    {firstProducts.map(product => (
                        <ProductCard productName={product.name} price={product.price} key={product['@key']} seller={product.seller?.name} />
                    ))}
                    <Link to="products">Ver todos</Link>
                </div>
                <div className="Box">
                    <span>Sellers</span>
                    {firstSellers.map(seller => (
                        <SellerCard key={seller['@key']} address={seller.address} cnpj={seller.cnpj} sellerName={seller.name} />
                    ))}
                    <Link to="sellers">Ver todos</Link>
                </div>
            </div>

        </Container>
    )
}

export default Dashboard;
