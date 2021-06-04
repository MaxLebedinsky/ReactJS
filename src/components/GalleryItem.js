import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGallery } from '../store/gallery/actions';
import { REQUEST_STATUS } from '../utils/constants';

export const GalleryItem = (props) => {
    return (  
            <div className="gallery-item">
                <img src={props.item.primaryImageSmall} alt={props.item.title} className="gallery-img"/>
                <h4>{props.item.title}</h4>
                <p>{props.item.artistDisplayName}, {props.item.objectEndDate}</p>
            </div> 
    )
}