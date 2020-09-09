const initialState = {
  patientId: 1,
  rideDetails: {},
};

// ACTION TYPES
const UPDATE_PATIENT = "UPDATE_PATIENT";
const UPDATE_RIDEDETAILS = "UPDATE_RIDEDETAILS";
// const DRIVERS_LOADING = "DRIVERS_LOADING";
// const DRIVERS_FAILED = "DRIVERS_FAILED";
// const ADD_DRIVERS = "ADD_DRIVERS";

// ACTION CREATORS
export const updateRideDetails = (ride) => ({
  type: UPDATE_RIDEDETAILS,
  payload: ride,
});

export const updatePatient = (patientId) => ({
  type: UPDATE_PATIENT,
  payload: patientId,
});

// export const driversLoading = () => ({
//   type: DRIVERS_LOADING,
// });

// export const driversFailed = (errmess) => ({
//   type: DRIVERS_FAILED,
//   payload: errmess,
// });

// export const addDrivers = (drivers) => ({
//   type: ADD_DRIVERS,
//   payload: drivers,
// });

// REDUCER
const RidesReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_RIDEDETAILS:
      return { ...state, rideDetails: action.payload };

    case UPDATE_PATIENT:
      return { ...state, patientId: action.payload };
    // case ADD_DRIVERS:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     errMess: null,
    //     drivers: action.payload,
    //   };

    // case DRIVERS_LOADING:
    //   return { ...state, isLoading: true, errMess: null, drivers: [] };

    // case DRIVERS_FAILED:
    //   return { ...state, isLoading: false, errMess: action.payload };

    default:
      return state;
  }
};
export default RidesReducer;

// Selector

export const getRides = (patientId) => (state) => {
  let patientDet = state.patients.patientDetails.find(
    (pd) => pd.id === patientId
  );
  let driverDet = state.drivers.driverDetails.find(
    (dr) => dr.id === patientDet.driverId
  );
  return {
    ...patientDet,
    driverName: driverDet.driverName,
    driverContact: driverDet.driverContact,
  };
};

export const getPastRides = () => (state) => {
  //return state.patientD;
  const addDriverInfo = (patient) => {
    let driverDet = state.drivers.driverDetails.find(
      (dr) => dr.id === patient.driverId
    );
    return {
      ...patient,
      reqTime: "06.30    13-8",
      driverName: driverDet.driverName,
      driverContact: driverDet.driverContact,
    };
  };
  return state.patients.patientDetails.map(addDriverInfo);
};
