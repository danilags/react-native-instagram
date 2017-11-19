import {
  GET_IMAGES
} from '../Actions/constants';

const initialState = {
  photos: [],
  successGetImages: false,
}
//
// function getImages(payload) {
//   if (payload) {
//
//   }
// }

const photosReducers = (state = initialState, action) => {
  console.log("ACTION PAYLOAD ", action.payload);
  switch (action.type) {
    case GET_IMAGES: {
      const { photos } = action.payload;
      return {
        ...state, photos: [...state.photos, ...photos]
      }

    }
    default: return state;

  }
}

export default photosReducers;
