import { connect } from 'react-redux';
import App from '.';
import getFilmsAction from '../../store/get-films/get-films.action';


const mapStateToProps = ({ films = {}, filmInfo = {} }) => {
    return {
        failure: films.meta?.status === "failure" || filmInfo.meta?.status === "failure",
    }
};

const mapDispatchToProps = (dispatch) => {
    return({
        fetchFilms: () => {
            dispatch(getFilmsAction());
        }
    });
};

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default connectedApp;
