import { createStore, applyMiddleware, compose, combineReducers } from "redux";

import thunk from "redux-thunk";
import PatientReducer from "./Patients";
import HospitalReducer from "./Hospitals";
import DriverReducer from "./Drivers";
import RidesReducer from "./RideDetailsSelector";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      patients: PatientReducer,
      hospital: HospitalReducer,
      drivers: DriverReducer,
      rides: RidesReducer,
    }),

    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
  return store;
};
