import { connect } from 'react-redux';
import MyAccountScreen from './MyAccountScreen';
import { logout } from '../../../stores/auth/auth.thunks'

const mapStateToProps = (state) => {
  const { user } = state;
  return { user };
};

const mapDispatchToProps = (dispatch, { navigation }) => {
  return {
    logout: () => dispatch(logout(navigation))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MyAccountScreen);
