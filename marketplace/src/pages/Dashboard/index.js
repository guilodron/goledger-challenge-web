import DashboardImage from '../../assets/dashboard.svg';
import CategoryCard from '../../components/CategoryCard';
import { Container } from './styles';
import {Link} from 'react-router-dom';
import ProductCard from '../../components/ProductCard';
import SellerCard from '../../components/SellerCard';

const Dashboard = () => {
    return (
        <Container>
            <strong>Dashboard</strong>
            <hr />
            <div className="boxes">
                <img src={DashboardImage} alt=""/>
                <div className="Box">
                    <span>Categories</span>
                    <CategoryCard nome="Cama" />
                    <CategoryCard nome="Cama" />
                    <CategoryCard nome="Cama" />
                    <Link to="categories">Ver todos</Link>
                </div>
                <div className="Box">
                    <span>Products</span>
                    <ProductCard nome="Cama" />
                    <ProductCard nome="Cama" />
                    <ProductCard nome="Cama" />
                    <Link to="categories">Ver todos</Link>
                </div>
                <div className="Box">
                    <span>Sellers</span>
                    <SellerCard address="avenida dos coqueiros 2" cnpj="07.357.036/0001-76" sellerName="Apple" />
                    <SellerCard address="avenida dos coqueiros 2" cnpj="07.357.036/0001-76" sellerName="Apple" />
                    <SellerCard address="avenida dos coqueiros 2" cnpj="07.357.036/0001-76" sellerName="Apple" />
                    
                    <Link to="categories">Ver todos</Link>
                </div>
            </div>

        </Container>
    )
}

export default Dashboard;
