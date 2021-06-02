import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGallery } from '../store/gallery/actions';
import { PAINTS_IDS, REQUEST_STATUS } from '../utils/constants';
import { GalleryItem } from './GalleryItem';
import { GalleryItemTest } from './GalleryItemTest';

export const Gallery = () => {
    // const gallery = useSelector(state => state.gallery.gallery);
    // const galleryStatus = useSelector(state => state.gallery.request.status);
    // const galleryError = useSelector(state => state.gallery.request.error);
    // const dispatch = useDispatch();

    // useEffect(() => {
    //         dispatch(getGallery());
    // }, []);

    // if (galleryStatus === REQUEST_STATUS.PENDING) {
    //     return <h3>Loading...</h3>
    // }

    // if (galleryError) {
    //     return <h3>Error: {galleryError}</h3>
    // }

    // console.log('gallery before render: ', gallery);
    
    return (
        <div className="gallery">  
            <h2>The Metropolitan Museum of Art</h2>
            <br />

            <GalleryItem itemId="438013"/>
            <GalleryItem itemId="437434"/>

        </div>
    )
}