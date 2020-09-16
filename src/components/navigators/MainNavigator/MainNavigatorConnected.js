import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {subscribeAuthChange} from '../../../stores/auth/auth.thunks';
import MainNavigator from './MainNavigator';

const mapStateToProps = (state) => {
  return {...state};
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      subscribeAuthChange,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(MainNavigator);
