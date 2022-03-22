/* eslint-disable require-yield */
// import Axios from 'axios';
import { call, delay, fork, put, take, takeLatest, select } from 'redux-saga/effects';
import { cyberbugsService } from '../../../services/CyberbugsServices';
import { DISPLAY_LOADING, HIDE_LOADING } from '../../../util/constants/LoadingConst';
import { TOKEN, USER_LOGIN } from '../../../util/constants/settingSystem';
import { USER_SIGNIN_API } from '../../constants/Cyberbugs/Cyberbugs';



//Quản lý các action saga

function * signinSaga(action) {
    console.log(action);
    yield put({
        type: DISPLAY_LOADING
    })
    yield delay(2000);
    //Goi API
    try {
        const {data,status} = yield call(() => cyberbugsService.signinCyberBugs(action.userLogin));

    //Lưu vào localStorage khi đăng nhập thành công
    localStorage.setItem(TOKEN,data.content.accessToken) // ham luu du lieu token vao localstorage
    localStorage.setItem(USER_LOGIN,JSON.stringify(data.content)); //luu vao localstorage ko the luu vao object se bien doi stringify


        console.log(data)
    }catch(err) {
        console.log(err.response.data)
    }
    yield put({
        type: HIDE_LOADING
    })

}

export function * theoDoiSignin() {
    yield takeLatest(USER_SIGNIN_API,signinSaga)
}