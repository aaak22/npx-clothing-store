import React from 'react';
import { useNavigate } from 'react-router-dom';
// import './directory-item.styles.scss'
import { BackgroundImage, Body, DirectoryItemContainer } from './directory-item.styles'

const DirectoryItem = ({ category }) => {
    const { title, id, imageUrl, route } = category;
    const navigate = useNavigate();

    const NavigateHandler = () => navigate(route);

    return (
        <DirectoryItemContainer key={id} onClick={NavigateHandler}>
        {/* <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }}></div>*/}
          <BackgroundImage imageUrl={imageUrl} />
          <Body>
            <h2>{ title }</h2>
            <p>Shop Now</p>
          </Body>
        </DirectoryItemContainer>
    );
}

export default DirectoryItem;
