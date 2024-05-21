import React from 'react'
import './categories.style.jsx'
import { BackgroundImage, Body, CategoriesContainer, CategoryItemContainer } from './categories.style.jsx';
import { useNavigate } from 'react-router-dom';
const Categories = () => {
    const categories = 
    [
      {
        "id": 1,
        "title": "Hats",
        "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
      },
      {
        "id": 2,
        "title": "Jackets",
        "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
      },
      {
        "id": 3,
        "title": "Sneakers",
        "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
      },
      {
        "id": 4,
        "title": "Women",
        "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
      },
      {
        "id": 5,
        "title": "Mens",
        "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
      }
    ]
    const navigate = useNavigate()
    const handleClickEvent = (title)=> navigate(`/shop/${title}`)
  return (
    <CategoriesContainer>
      {categories.map(({id , title , imageUrl})=> 
        (<CategoryItemContainer onClick={() => handleClickEvent(title)} key={id}>
          <BackgroundImage ImageUrl={imageUrl} />
        <Body>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </Body>
      </CategoryItemContainer>)
      )}
    </CategoriesContainer>
  );
}

export default React.memo(Categories)