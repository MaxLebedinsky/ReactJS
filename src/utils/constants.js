import { createMuiTheme } from "@material-ui/core";
import { teal } from "@material-ui/core/colors";

export const AUTHORS = {
    USER: 'user',
    ROBOT: 'robot'
};

export const theme = createMuiTheme({
    palette: {
      primary: teal,
    },
    textField: {
        backgroundColor: 'white',
    },
    button: {
        marginTop: '20px',
    }
  });

export const ROBOT_MESSAGE = "Robot's answer";

export const API_URL = "https://api.spaceflightnewsapi.net/v3/articles"

export const API_URL_GALLERY = "https://collectionapi.metmuseum.org/public/collection/v1/objects/"

// export const PAINTS_IDS = [436535,436528,436532,459193,336327,459123,437394,437097,438816,436121,437835,436095,435882,437654,437658];

// export const PAINTS_IDS = [436138,336395,435878,438015,435888,438815,436964,436105,437383,436180,436156,435869,753512,435875,436451,436171,436954,436177,436869,436483,436948];

export const PAINTS_IDS = [459110,438815,459112,437432,438011,438014,437430,459111,438012,437429,438013,437434,441104,438010,437428,437437];

// export const PAINTS_IDS = [459112,437432,438011];

export const REQUEST_STATUS = {
    IDLE: 0,
    PENDING: 1,
    SUCCESS: 2,
    FAILURE: 3,
}