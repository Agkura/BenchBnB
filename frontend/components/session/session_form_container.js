import { connect } from 'react-redux';
import { login, signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ( state, ownProps ) => ({
  loggedIn: (state.session.currentUser !== null),
  errors: state.session.errors,
  formType: ownProps.location.pathname
})

const dispatchStateToProps = ( dispatch, ownProps ) => ({
  processForm: ( user ) => {
    if ( ownProps.location.pathname === '/login' ) {return dispatch(login(user));}
    else { return dispatch(signup(user));}
  }
})

export default connect(
  mapStateToProps,
  dispatchStateToProps
)(SessionForm);
