import { REQUEST_STATUS } from "../../utils/constants";
import { GALLERY_REQUEST, GALLERY_SUCCESS, GALLERY_FAILURE, GALLERY_SET_CURRENT_GALLERY} from "./actions";

const initialState = {
    galleryItem: [],
    currentGallery: [],
    request: {
        status: REQUEST_STATUS.IDLE,
        error: '',
    }
}

export const galleryReducer = (state = initialState, action) => {
    switch (action.type){
        case GALLERY_REQUEST: {
            return {
                ...state,
                request: {
                    status: REQUEST_STATUS.PENDING,
                    error: '',
                }
            }
        }
        case GALLERY_FAILURE: {
            return {
                ...state,
                request: {
                    status: REQUEST_STATUS.FAILURE,
                    error: action.error,
                }
            }
        }
        case GALLERY_SUCCESS: {
            return {
                ...state,
                galleryItem: action.gallery,
                request: {
                    status: REQUEST_STATUS.SUCCESS,
                    error: '',
                }
            }
        }
        case GALLERY_SET_CURRENT_GALLERY: {
            return {
                ...state,
                currentGallery: action.currentGallery,
                // request: {
                //     status: REQUEST_STATUS.SUCCESS,
                //     error: '',
                // }
            }
        }
        default:
            return state;
    }
}