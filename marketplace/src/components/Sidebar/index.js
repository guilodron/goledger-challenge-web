import { Link } from 'react-router-dom';
import {
    Container
} from './styles';
import {
    FaFilter,
    FaShoppingBasket,
    FaThList,
    FaUserTag
} from 'react-icons/fa';

const Sidebar = () => {
    return (
        <Container>
            <img src="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="profile" />
            <ul>
                <li>
                    <Link to="/"><FaThList /> Dashboard</Link>
                </li>
                <li>
                    <Link to="products"><FaShoppingBasket /> Products</Link>
                </li>
                <li>
                    <Link to="categories"><FaFilter /> Categories</Link>
                </li>
                <li>
                    <Link to="sellers"><FaUserTag /> Sellers</Link>
                </li>
            </ul>

        </Container>
    )
}

export default Sidebar
