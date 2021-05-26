import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGallery } from '../store/gallery/actions';
import { PAINTS_IDS, REQUEST_STATUS } from '../utils/constants';

export const GalleryItem = (props) => {
    const galleryList = useSelector(state => state.gallery.galleryList);
    const galleryStatus = useSelector(state => state.gallery.request.status);
    const galleryError = useSelector(state => state.gallery.request.error);
    const dispatch = useDispatch();

    useEffect(() => {
            dispatch(getGallery(props.itemID));
    }, []);

    if (galleryStatus === REQUEST_STATUS.PENDING) {
        return <h3>Loading...</h3>
    }

    if (galleryError) {
        return <h3>Error: {galleryError}</h3>
    }

    return (
        <>            
            {galleryList.map(item => (
                <div key={item.objectID}>
                    <h4>{item.title}</h4>
                    <h4>{item.objectID}</h4>
                </div>
            ))}
        </>
    )
}