import Chart from '../../components/mainChart/Chart'
import {connect} from "react-redux";
import {initializeChartData} from "../../actions/mainChart/chartAction";

const mapStateToProps = (state) => {
    return{
        market: state.chartReducer.market,
        data: state.chartReducer.data,
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        initializeChartData: () => {
            dispatch(initializeChartData())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chart)