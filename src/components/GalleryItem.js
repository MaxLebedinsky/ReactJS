import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGallery } from '../store/gallery/actions';
import { REQUEST_STATUS } from '../utils/constants';

export const GalleryItem = (props) => {
    // const gallery = useSelector(state => state.gallery.gallery);
    // const galleryStatus = useSelector(state => state.gallery.request.status);
    // const galleryError = useSelector(state => state.gallery.request.error);
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(getGallery(props.itemId));
    // }, []);

    // if (galleryStatus === REQUEST_STATUS.PENDING) {
    //     return <h3>Loading...</h3>
    // }

    // if (galleryError) {
    //     return <h3>Error: {galleryError}</h3>
    // }

    // console.log('props.item before render: ', gallery);

    return (  
            <div className="gallery-item">
                <img src={props.item.primaryImageSmall} alt={props.item.title} className="gallery-img"/>
                <h4>{props.item.title}</h4>
                <p>{props.item.artistDisplayName}, {props.item.objectEndDate}</p>
            </div> 
    )
}