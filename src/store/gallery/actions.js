import { API_URL_GALLERY } from "../../utils/constants";

export const GALLERY_REQUEST = 'GALLERY::REQUEST';
export const GALLERY_SUCCESS = 'GALLERY::SUCCESS';
export const GALLERY_FAILURE = 'GALLERY::FAILURE';
export const GALLERY_SET_CURRENT_GALLERY = 'GALLERY::SET_CURRENT_GALLERY'

export const galleryRequest = () => ({
    type: GALLERY_REQUEST
});

export const gallerySuccess = (gallery) => ({
    type: GALLERY_SUCCESS,
    gallery: gallery
});

export const setCurrentGallery = (currentGallery) => ({
    type: GALLERY_SET_CURRENT_GALLERY,
    currentGallery,
})

export const galleryFailure = (error) => ({
    type: GALLERY_FAILURE,
    error,
});

// THUNK
export const getGallery = (itemId, currentGallery) => (dispatch) => {
    dispatch(galleryRequest());

    fetch(`${API_URL_GALLERY}${itemId}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("request failed with status: " + response.status);
            }
            return response.json();
        })
        .then(data => {
            currentGallery.push(data);
            // console.log('currentGallery from fetch: ', currentGallery);
            dispatch(setCurrentGallery(currentGallery));
            // console.log('data from fetch: ', data)
            dispatch(gallerySuccess(data));
        })
        .catch((err) => {
            dispatch(galleryFailure(err.message))
        });
}