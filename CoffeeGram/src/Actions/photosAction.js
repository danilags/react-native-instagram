import axios from 'axios';

import {
  GET_IMAGES,
} from './constants';

export const getImageSuccess = (data) => ({
  type: GET_IMAGES,
  payload: data,
})

// const page = 1
export const getImage = (page) => (
  dispatch => (
    setTimeout(() => {
      axios.get(`https://api.500px.com/v1/photos?feature=popular&page=${page}&image_size=600&consumer_key=QO3JD9Q4PSwqK07xnAK7VOrcO69UusGWnId1swJg`)
        .then((res) => {
          console.log("ini hasilnya bro ", res);
          return dispatch(getImageSuccess (res.data))
        })
        .catch(err => dispatch(getImageSuccess(err)))
    }, 1500)
  )
)

// export const getImage  = () => {
//   let rand = Math.floor(Math.random() * 999)
//   return (dispatch) => {
//     fetch(`https://api.500px.com/v1/photos?feature=popular&page=${rand}&image_size=600&consumer_key=QO3JD9Q4PSwqK07xnAK7VOrcO69UusGWnId1swJg`)
//     .then(res => res.json())
//     .then(data => {
//       console.log("ini balikan dari backend .. ", data);
//       dispatch(getImagesSuccess(data.photos))
//     });
//   }
// }
