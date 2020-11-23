import { put, takeEvery, all } from 'redux-saga/effects';

import { GET_DATA_SAGA, GET_DATA } from '../Types/types';

export function* getDataSaga() {
  yield put({ type: GET_DATA });
}

export function* watchGetDataSaga() {
  yield takeEvery(GET_DATA_SAGA, getDataSaga);
}

// //clicking Profile
// export function* clickProfileSaga() {
//   yield put({ type: CLICKED_PROFILE });
// }

// export function* watchClickProfileSaga() {
//   yield takeEvery(CLICKED_PROFILE_SAGA, clickProfileSaga);
// }

// //newticketWindow
// export function* clickNewTicketSaga() {
//   yield put({ type: CLICK_NEW_TICKET });
// }

// export function* watchClickNewTicketSaga() {
//   yield takeEvery(CLICK_NEW_TICKET_SAGA, clickNewTicketSaga);
// }

// //postNewTicket
// export function* postNewTicketSaga(action) {
//   const newData = action.payload;
//   yield put({ type: POST_NEW_TICKET, payload: newData });
// }
// export function* watchPostNewTicketSaga() {
//   yield takeEvery(POST_NEW_TICKET_SAGA, postNewTicketSaga);
// }

// //rootSaga
// export default function* rootSaga() {
//   yield all([watchGetDataSaga(), watchClickProfileSaga()]);
// }

export default function* rootSaga() {
  yield all([watchGetDataSaga()]);
}
