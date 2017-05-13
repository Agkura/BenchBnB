import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = ( state ) => {
  return ({
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = ( dispatch ) => {
  return ({
    logout: () => logout(dispatch)
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
