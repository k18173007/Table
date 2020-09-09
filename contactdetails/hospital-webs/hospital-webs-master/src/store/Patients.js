import { Patients } from "./tempAPI";
import { createSelector } from "reselect";

const initialState = {
  patientDetails: Patients,
};

// ACTION TYPES
const PATIENTS_LOADING = "PATIENTS_LOADING";
const PATIENTS_FAILED = "PATIENTS_FAILED";
const ADD_PATIENTS = "ADD_PATIENTS";

// ACTION CREATORS
export const fetchPatients = () => (dispatch) => {
  dispatch(patientsLoading(true));
  dispatch(addPatients(Patients));
};

export const patientsLoading = () => ({
  type: PATIENTS_LOADING,
});

export const patientsFailed = (errmess) => ({
  type: PATIENTS_FAILED,
  payload: errmess,
});

export const addPatients = (patients) => ({
  type: ADD_PATIENTS,
  payload: patients,
});

// REDUCER
const PatientReducer = (state = initialState, action) => {
  switch (action.type) {
    // case ADD_PATIENTS:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     errMess: null,
    //     patients: action.payload,
    //   };

    // case PATIENTS_LOADING:
    //   return { ...state, isLoading: true, errMess: null, patients: [] };

    // case PATIENTS_FAILED:
    //   return { ...state, isLoading: false, errMess: action.payload };

    default:
      return state;
  }
};

export default PatientReducer;

//SELECTOR

export const getPatientWithId = (patientId) => {
  return createSelector(
    (state) => state.patients.patientDetails,
    (patients) => patients.find((patient) => patient.id === patientId)
  );
};
