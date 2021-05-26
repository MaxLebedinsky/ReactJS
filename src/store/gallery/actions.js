import { useState } from "react";
import { API_URL_GALLERY, PAINTS_IDS } from "../../utils/constants";

export const GALLERY_REQUEST = 'GALLERY::REQUEST';
export const GALLERY_SUCCESS = 'GALLERY::SUCCESS';
export const GALLERY_FAILURE = 'GALLERY::FAILURE';
export const GALLERY_ADD_GALLERY_ITEM = 'GALLERY::ADD_GALLERY_ITE'

export const galleryRequest = () => ({
    type: GALLERY_REQUEST
});

export const gallerySuccess = (gallery) => ({
    type: GALLERY_SUCCESS,
    gallery: [gallery]
});

export const galleryFailure = (error) => ({
    type: GALLERY_FAILURE,
    error,
});

export const addGalleryItem = (currentGallery) => ({
    type: GALLERY_ADD_GALLERY_ITEM,
    currentGallery,
});

// THUNK
export const getGallery = (itemId) => (dispatch) => {
    dispatch(galleryRequest());

    fetch(`${API_URL_GALLERY}${itemId}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("request failed with status: " + response.status);
            }
            return response.json();
        })
        .then(data => {
            dispatch(gallerySuccess(data));
        })
        .catch((err) => {
            dispatch(galleryFailure(err.message))
        });
}