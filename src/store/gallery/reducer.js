import { REQUEST_STATUS } from "../../utils/constants";
import { GALLERY_REQUEST, GALLERY_SUCCESS, GALLERY_FAILURE} from "./actions";

const initialState = {
    galleryList: [],
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
                galleryList: action.gallery,
                request: {
                    status: REQUEST_STATUS.SUCCESS,
                    error: '',
                }
            }
        }
        default:
            return state;
    }
}