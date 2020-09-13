import {connect} from 'react-redux';
import MyAccountScreen from './MyAccountScreen';

const mapStateToProps = (state) => {
  console.log(state);
  const {auth} = state;
  return {auth};
};

export default connect(mapStateToProps)(MyAccountScreen);
