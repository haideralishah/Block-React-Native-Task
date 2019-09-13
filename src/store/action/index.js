
import { AsyncStorage } from 'react-native';
import ActionTypes from '../constant';

function fetchFunc(url, data) {
    return new Promise(function (res, rej) {
        fetch(url, {
            method: 'POST',
            body: data ? JSON.stringify(data) : null,
            headers: {
                'Content-Type': 'application/json'
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


//Auth Checking Action Function 

export function authCheck() {
    return dispatch => {
        return new Promise(async function (resolve, reject) {
            try {
                const value = await AsyncStorage.getItem('user');
                if (value !== null) {
                    console.log(value);
                    dispatch({ type: ActionTypes.USER, payload: JSON.parse(value) })
                    resolve();
                }
                else {
                    reject();
                }
            } catch (error) {
                console.log(error);
            }
        })
    }
}

//Login Action Function 

export function signin(data) {
    return dispatch => {
        return new Promise(function (resolve, reject) {
            console.log('Register', data);
            var url = 'http://192.168.100.55:5000/user/signIn';
            fetchFunc(url, data)
                .then((response) => {
                    if (response.message) {
                        reject();
                    } else {
                        AsyncStorage.setItem('user', JSON.stringify(response));
                        dispatch({ type: ActionTypes.USER, payload: response })
                        resolve();
                    }
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
            var url = 'http://192.168.100.55:5000/user/register';
            fetchFunc(url, data)
                .then((response) => {
                    if (response.message) {
                        reject();
                    }
                    else {
                        AsyncStorage.setItem('user', JSON.stringify(response));
                        dispatch({ type: ActionTypes.USER, payload: data })
                        resolve();
                    }
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
            var url = 'http://192.168.100.55:5000/jobs/add';
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
            var url = `http://192.168.100.55:5000/jobs/get/${id}`;
            fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json())
                .then(response => {
                    console.log('Success:', response);
                    dispatch({ type: ActionTypes.LIST, payload: response })
                    resolve({ data: response.length ? response : '' });
                })
                .catch(error => {
                    console.error('Error:', error);
                    reject();
                });
        })
    }
}

//Add Job Function 

export function deleteJob(id, list) {
    return dispatch => {
        return new Promise(function (resolve, reject) {
            console.log('Delete Id', id, list);
            dispatch({ type: ActionTypes.LIST, payload: list })
            var url = 'http://192.168.100.55:5000/jobs/delete';
            fetch(url, {
                method: 'DELETE',
                body: JSON.stringify({ jobId: id }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json())
                .then(response => {
                    console.log('Success:', response);
                    dispatch({ type: ActionTypes.LIST, payload: list })
                    resolve();
                })
                .catch(error => {
                    console.error('Error:', error);
                    reject();
                });
        })
    }
}

//Logout Action Function 

export function logout() {
    return dispatch => {
        return new Promise(function (resolve, reject) {
            AsyncStorage.removeItem('user');
            dispatch({ type: ActionTypes.USER, payload: '' })
            resolve();
        })
    }
}
