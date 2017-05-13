import * as APIUtil from '../util/session_api_util';

//constants
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RECEIVE_LOGOUT = "RECEIVE_LOGOUT";

//sync
export const receiveCurrentUser = ( currentUser ) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = ( errors ) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const receiveLogOut = () => ({
  type: RECEIVE_LOGOUT
});

//async
export const login = ( user ) => ( dispatch ) => {
  return APIUtil.login(user)
  .then( logged => dispatch(receiveCurrentUser(logged)));
};

export const logout = () => ( dispatch ) => {
  return APIUtil.logout()
  .then( () => dispatch(receiveLogOut()));
};

export const signup = ( user ) => ( dispatch ) => {
  return APIUtil.signup(user)
  .then ( newUser => dispatch(receiveCurrentUser(newUser)));
};
