import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import actions from './../../actions/buyform';
import Form from './form';

export default connect(
    ({ buyForm }) => ({
        view: buyForm,
        title: "Buy ETH",
        btnTitle: "Buy"
    }),
    dispatch => bindActionCreators(actions, dispatch)
)(Form);
