import React from 'react';
import { PAINTS_IDS } from '../utils/constants';
import { GalleryItem } from './GalleryItem';

// const links = PAINTS_IDS.map(item)

export const Gallery = () => {
    return(
        <div>
            {/* {PAINTS_IDS.map(item =>
                <GalleryItem key={item} itemID={item} />
            )} */}
            <GalleryItem itemID="459123" />
            <GalleryItem itemID="436535" />
            <GalleryItem itemID="436528" />
            
        </div>
    )
}