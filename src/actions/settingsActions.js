import {
  DISABLE_BALANCE_ON_ADD,
  DISABLE_BALANCE_ON_EDIT,
  ALLOW_REGISTRATION
} from "./types";

const handleChangeLocalStorageSettings = setting => {
  // Get the settings from localStorage
  const settings = JSON.parse(localStorage.getItem("settings"));

  // Find the single setting that was passed as parameter
  // And flip THAT setting (boolean)
  settings[setting] = !settings[setting];

  // Save all settings (but only one was changed) in the localStorage again
  localStorage.setItem("settings", JSON.stringify(settings));

  // Return the updated single setting
  return settings[setting];
};

// These functions will call the 'handleChangeLocalStorageSettings' and flip the boolean,
// then change the settings in the global settings state,
// because of the 'linked' function in the settingsReducer
export const setDisableBalanceOnAdd = () => {
  return {
    type: DISABLE_BALANCE_ON_ADD,
    payload: handleChangeLocalStorageSettings("disableBalanceOnAdd")
  };
};

export const setDisableBalanceOnEdit = () => {
  return {
    type: DISABLE_BALANCE_ON_EDIT,
    payload: handleChangeLocalStorageSettings("disableBalanceOnEdit")
  };
};

export const setAllowRegistration = () => {
  return {
    type: ALLOW_REGISTRATION,
    payload: handleChangeLocalStorageSettings("allowRegistration")
  };
};
