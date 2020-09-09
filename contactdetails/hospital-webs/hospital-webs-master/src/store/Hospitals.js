import { Hospitals } from "./tempAPI";
import { createSelector } from "reselect";

const initialState = {
  hospitalDetails: Hospitals,
};

// ACTION TYPES
const HOSPITALS_LOADING = "HOSPITALS_LOADING";
const HOSPITALS_FAILED = "HOSPITALS_FAILED";
const ADD_HOSPITALS = "ADD_HOSPITALS";

// ACTION CREATORS
export const fetchHospitals = () => (dispatch) => {
  dispatch(hospitalsLoading(true));
  dispatch(addHospitals(Hospitals));
};

export const hospitalsLoading = () => ({
  type: HOSPITALS_LOADING,
});

export const hospitalsFailed = (errmess) => ({
  type: HOSPITALS_FAILED,
  payload: errmess,
});

export const addHospitals = (hospitals) => ({
  type: ADD_HOSPITALS,
  payload: hospitals,
});

// REDUCER
const HospitalReducer = (state = initialState, action) => {
  switch (action.type) {
    // case ADD_HOSPITALS:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     errMess: null,
    //     hospitals: action.payload,
    //   };

    // case HOSPITALS_LOADING:
    //   return { ...state, isLoading: true, errMess: null, hospitals: [] };

    // case HOSPITALS_FAILED:
    //   return { ...state, isLoading: false, errMess: action.payload };

    default:
      return state;
  }
};

export default HospitalReducer;

//SELECTOR

export const getHospitalWithId = (hospitalId) => {
  return createSelector(
    (state) => state.hospital.hospitalDetails,
    (hospitals) => hospitals.find((hospital) => hospital.id === hospitalId)
  );
};
