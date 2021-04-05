import React from 'react'
import AddButton from '../../components/AddButton';
import {
    Container
} from './styles';
import CategoryImage from '../../assets/category.svg';
import CategoryCard from '../../components/CategoryCard';

const CategoriesPage = () => {
    return (
        <Container>
            <strong>Categories</strong>
            <hr />
            <AddButton addName="product" callback={()=> alert('Bom dia!!')}/>
            <div className="category-display">
                <div className="list">
                    <CategoryCard nome="Cama" />
                    <CategoryCard nome="Cama" />
                    <CategoryCard nome="Cama" />
                    <CategoryCard nome="Cama" />
                    <CategoryCard nome="Cama" />
                    <CategoryCard nome="Cama" />
                    <CategoryCard nome="Cama" />
                    <CategoryCard nome="Cama" />
                    <CategoryCard nome="Cama" />
                    <CategoryCard nome="Cama" />
                    <CategoryCard nome="Cama" />
                    <CategoryCard nome="Cama" />
                    <CategoryCard nome="Cama" />
                    <CategoryCard nome="Cama" />
                    <CategoryCard nome="Cama" />
                    <CategoryCard nome="Cama" />
                </div>
                <img src={CategoryImage} alt="Ilustração de produto"/>
            </div>
        </Container>
    )
}

export default CategoriesPage;
