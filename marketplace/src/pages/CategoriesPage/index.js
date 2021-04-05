import React, { useContext } from 'react'
import AddButton from '../../components/AddButton';
import {
    Container
} from './styles';
import CategoryImage from '../../assets/category.svg';
import CategoryCard from '../../components/CategoryCard';
import { GeneralContext } from '../../hooks/generalHook';

const CategoriesPage = () => {

    const generalContext = useContext(GeneralContext);

    return (
        <Container>
            <strong>Categories</strong>
            <hr />
            <AddButton addName="product" callback={()=> alert('Bom dia!!')}/>
            <div className="category-display">
                <div className="list">
                    {generalContext.categories.map(category => (
                        <CategoryCard nome={category.name} key={category['@key']} />
                    ))}
                </div>
                <img src={CategoryImage} alt="Ilustração de produto"/>
            </div>
        </Container>
    )
}

export default CategoriesPage;
