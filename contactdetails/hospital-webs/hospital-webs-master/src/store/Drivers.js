import { Drivers } from "./tempAPI";
import { createSelector } from "reselect";

const initialState = {
  driverDetails: Drivers,
  driverInfo: { ...Drivers[0] },
};

// ACTION TYPES
const UPDATE_DRIVERINFO = "UPDATE_DRIVERINFO";
// const DRIVERS_LOADING = "DRIVERS_LOADING";
// const DRIVERS_FAILED = "DRIVERS_FAILED";
// const ADD_DRIVERS = "ADD_DRIVERS";

// ACTION CREATORS
export const updateDriverInfo = (driverId) => ({
  type: UPDATE_DRIVERINFO,
  payload: driverId,
});
// export const fetchDrivers = () => (dispatch) => {
//   dispatch(driversLoading(true));
//   dispatch(addDrivers(Drivers));
// };

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
const DriverReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_DRIVERINFO:
      return {
        ...state,
        driverInfo: state.driverDetails.find((dr) => dr.id === action.payload),
      };
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
export default DriverReducer;

//SELECTORS
export const getDriversWithId = (driverId) => {
  return createSelector(
    (state) => state.drivers.driverDetails,
    (drivers) => drivers.find((dr) => dr.id === driverId)
  );
};

export const getDriversWithHospitalId = (hospitalId) => {
  return createSelector(
    (state) => state.drivers.driverDetails,
    (drivers) => drivers.filter((dr) => dr.hospitalId === hospitalId)
  );
};

export const getNoOfDriversWithHospitalId = (hospitalId) => {
  return createSelector(
    [getDriversWithHospitalId(hospitalId)],
    (drivers) => drivers.length
  );
};
