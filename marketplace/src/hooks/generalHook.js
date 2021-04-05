import axios from 'axios';
import { createContext, useState, useEffect } from 'react';
import api from '../service/api';

export const GeneralContext = createContext();

const GeneralProvider = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [sellers, setSellers] = useState([]);
    const [categories, setCategories] = useState([]);

    const loadProducts = async () => {
        const response = await api.post('/query/search', {
            query: {
                selector: {
                    "@assetType": 'product'
                }
            }
        });
        const products = response.data.result.map(product => {
            const soldBy = sellers.find(seller => seller['@key'] === product.soldBy['@key']);
            delete product.soldBy;
            return {
                seller: soldBy,
                ...product
            }
        });
        console.log(products);
        setProducts(products);
    }

    const loadSellers = async () => {
        const response = await api.post('/query/search', {
            query: {
                selector: {
                    "@assetType": 'seller'
                }
            }
        });
        setSellers(response.data.result);
    }

    const loadCategories = async () => {
        const response = await api.post('/query/search', {
            query: {
                selector: {
                    "@assetType": 'category'
                }
            }
        });
        setCategories(response.data.result);
    }

    const loadData = async () => {
        await loadSellers();
        await loadCategories();
        await loadProducts();
    }

    useEffect(() => {
        loadData();
    });

    return (
        <GeneralContext.Provider value={{ products, sellers, categories }}>
            {children}
        </GeneralContext.Provider>
    );
}

export default GeneralProvider;