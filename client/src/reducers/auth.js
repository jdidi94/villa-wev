import {
  LOGIN,
  VERIFY_USER,
  VERIFY_USER__PAGE_UNLOADED,
  REGISTER,
  LOGIN_PAGE_UNLOADED,
  REGISTER_PAGE_UNLOADED,
  ASYNC_START,
  UPDATE_FIELD_AUTH,
  GOOGLE_LOGIN,
  GOOGLE_LOGIN_PAGE_UNLOADED,
} from "../constants/actionTypes";

const auth = (state = {}, action) => {
  switch (action.type) {
    case LOGIN:
    case REGISTER:
    case GOOGLE_LOGIN:
    case VERIFY_USER:
      return {
        ...state,
        inProgress: false,
        errors: action.error ? action.payload.errors : null,
      };
    case LOGIN_PAGE_UNLOADED:
    case REGISTER_PAGE_UNLOADED:
    case GOOGLE_LOGIN_PAGE_UNLOADED:
    case VERIFY_USER__PAGE_UNLOADED:
      return { inProgress: false };
    case ASYNC_START:
      if (
        action.subtype === LOGIN ||
        action.subtype === REGISTER ||
        action.subtype === GOOGLE_LOGIN ||
        action.subtype === VERIFY_USER
      ) {
        return { ...state, inProgress: true };
      }
      break;
    case UPDATE_FIELD_AUTH:
      return { ...state, [action.key]: action.value };
    default:
      return state;
  }

  return state;
};
export default auth;
