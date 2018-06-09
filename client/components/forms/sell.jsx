import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import actions from './../../actions/sellform';
import Form from './form';

export default connect(
    ({ sellForm }) => ({
        view: sellForm,
        title: "Sell Form",
        btnTitle: "sell"
    }),
    dispatch => bindActionCreators(actions, dispatch)
)(Form);
