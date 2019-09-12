
import ActionTypes from '../constant';

function fetchFunc(url, data) {
    return new Promise(function (res, rej) {
        fetch(url, {
            method: 'POST',
            body: data ? data : null,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(res => res.json())
            .then(response => {
                console.log('Success:', response);
                res(response);
            })
            .catch(error => {
                console.error('Error:', error);
                rej();
            });
    })
}

//Login Action Function 

export function signin(data) {
    return dispatch => {
        return new Promise(function (resolve, reject) {
            console.log('Register', data);
            var url = 'http://localhost:5000/user/signIn';
            fetchFunc(url, data)
                .then((response) => {
                    dispatch({ type: ActionTypes.USER, payload: data })
                    resolve();
                })
                .catch(() => {
                    reject();

                })
        })
    }
}

//Registration Action Function 

export function register(data) {
    return dispatch => {
        return new Promise(function (resolve, reject) {
            console.log('Register', data);
            var url = 'http://localhost:5000/user/register';
            fetchFunc(url, data)
                .then((response) => {
                    dispatch({ type: ActionTypes.USER, payload: data })
                    resolve();
                })
                .catch(() => {
                    reject();
                })
        })
    }
}

//Add Job Function 

export function createJob(data) {
    return dispatch => {
        return new Promise(function (resolve, reject) {
            console.log('Create Job', data);
            var url = 'http://localhost:5000/jobs/add';
            fetchFunc(url, data)
                .then(() => {
                    resolve();
                })
                .catch(() => {
                    reject();
                })
        })
    }
}

//Get List Action Function 

export function getList(id) {
    return dispatch => {
        return new Promise(function (resolve, reject) {
            console.log('ID', id);
            var url = `http://localhost:5000/jobs/get/${id}`;
            fetchFunc(url, null)
                .then((response) => {
                    // dispatch({ type: ActionTypes.LIST, payload: [] })
                    resolve();
                })
                .catch(() => {
                    reject();
                })
        })
    }
}

//Add Job Function 

export function deleteJob(data) {
    return dispatch => {
        return new Promise(function (resolve, reject) {
            // console.log('Delete Id', id);
            dispatch({ type: ActionTypes.LIST, payload: data })
            // var url = 'http://localhost:5000/jobs/delete';
            // fetchFunc(url, null)
            //     .then(() => {
            //         resolve();
            //     })
            //     .catch(() => {
            //         reject();
            //     })
        })
    }
}
