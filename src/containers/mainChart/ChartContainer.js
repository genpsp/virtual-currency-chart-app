import Chart from '../../components/mainChart/Chart'
import {connect} from "react-redux";
import {loadData} from "../../actions/mainChart/chartAction";

const mapStateToProps = (state) => {
    return{

    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        loadData: () => {
            dispatch(loadData())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chart)