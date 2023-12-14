import { formActions } from "./formSlice";
import { useSelector } from "react-redux";
import { selectFormNumber } from "./formSelector";

export const setType = (type) => {
  return formActions.SET_TYPE(type);
};

export const changePageNumber = (pageNumber) => {
  // return formActions.CHECK_STATE(type);
  return formActions.SET_PAGE_NUMBER(pageNumber);
};

export const setTypeOfFuneral = (funeralType) => {
  return formActions.SET_TYPE_OF_FUNERAL(funeralType);
};

export const setBeforeService = (beforeServiceType) => {
  return formActions.SET_BEFORE_SERVICE(beforeServiceType);
};

export const setTheService = (theService) => {
  return formActions.SET_THE_SERVICE(theService);
};

export const setAfterService = (afterService) => {
  return formActions.SET_AFTER_SERVICE(afterService);
};
