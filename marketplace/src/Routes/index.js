import {Switch, Route, withRouter} from 'react-router-dom';
import CategoriesPage from '../pages/CategoriesPage';
import Dashboard from '../pages/Dashboard';
import ProductsPage from '../pages/ProductsPage';
import SellersPage from '../pages/SellersPage';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Dashboard />
            </Route>
            <Route exact path="/products">
                <ProductsPage />
            </Route>
            <Route exact path="/categories">
                <CategoriesPage />
            </Route>
            <Route exact path="/sellers">
                <SellersPage />
            </Route>
        </Switch>
    )
}

export default withRouter(Routes);