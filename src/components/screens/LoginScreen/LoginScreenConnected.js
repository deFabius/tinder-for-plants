import { connect } from 'react-redux';
import LoginScreen from './LoginScreen';
import { login } from '../../../stores/auth/auth.thunks'

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch, { navigation }) => {
  return {
    login: (email, password) => dispatch(login(email, password, navigation)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
