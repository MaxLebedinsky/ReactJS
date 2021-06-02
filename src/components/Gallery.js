import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGallery } from '../store/gallery/actions';
import { PAINTS_IDS, REQUEST_STATUS } from '../utils/constants';

export const Gallery = () => {
    // const galleryItem = useSelector(state => state.gallery.galleryItem);
    let currentGallery = useSelector(state => state.gallery.currentGallery);
    const galleryStatus = useSelector(state => state.gallery.request.status);
    const galleryError = useSelector(state => state.gallery.request.error);
    const dispatch = useDispatch();

    useEffect(() => {
        currentGallery = [];
        PAINTS_IDS.forEach(item => {
            // console.log('currentGallery from useEffect: ', currentGallery);
            dispatch(getGallery(item, currentGallery));
        }); 
    }, []);

    if (galleryStatus === REQUEST_STATUS.PENDING) {
        return <h3>Loading...</h3>
    }

    if (galleryError) {
        return <h3>Error: {galleryError}</h3>
    }

    console.log('currentGallery before render: ', currentGallery);

    return (
        <div className="gallery">  
            <h2>The Metropolitan Museum of Art</h2>
            <br />
            <div className="gallery-content">      
                {currentGallery.map(item => (
                    <div className="gallery-item" key={item.objectID}>
                        <img src={item.primaryImageSmall} alt={item.title} className="gallery-img"/>
                        <h4>{item.title}</h4>
                        <p>{item.artistDisplayName}, {item.objectEndDate}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}