import { API_URL_GALLERY } from "../../utils/constants";

export const GALLERY_REQUEST = 'GALLERY::REQUEST';
export const GALLERY_SUCCESS = 'GALLERY::SUCCESS';
export const GALLERY_FAILURE = 'GALLERY::FAILURE';
export const GALLERY_CLEAR = 'GALLERY::CLEAR';

export const galleryRequest = () => ({
    type: GALLERY_REQUEST
});

export const gallerySuccess = (gallery) => ({
    type: GALLERY_SUCCESS,
    gallery: gallery
});


export const galleryFailure = (error) => ({
    type: GALLERY_FAILURE,
    error,
});

export const clearGallery = () => ({
    type: GALLERY_CLEAR
})

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
            console.log(data);
            // debugger;
        })
        .catch((err) => {
            dispatch(galleryFailure(err.message))
        });
}