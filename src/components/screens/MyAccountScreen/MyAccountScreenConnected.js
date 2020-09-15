import { connect } from 'react-redux';
import MyAccountScreen from './MyAccountScreen';
import { logout, getUserData } from '../../../stores/auth/auth.thunks'

const mapStateToProps = (state) => {
  const { user } = state;
  return { user };
};

const mapDispatchToProps = (dispatch, { navigation }) => {
  return {
    logout: () => dispatch(logout(navigation)),
    getUserData: () => dispatch(getUserData())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MyAccountScreen);
