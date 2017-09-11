import {
  GET_IMAGES
} from '../Actions/constants';

const initialState = {
  photos: '',
  successGetImages: false,
}
//
// function getImages(payload) {
//   if (payload) {
//
//   }
// }

const photosReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_IMAGES: {
      return action.payload;

    }
    default: return state;

  }
}

export default photosReducers;
