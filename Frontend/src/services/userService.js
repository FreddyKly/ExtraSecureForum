import axios from 'axios';
const url = 'http://localhost:8080/api/users';

class userService {
    // Get detections
    static getUser() {
        // eslint-disable-next-line no-async-promise-executor
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data);
            } catch (err) {
                reject(err);
            }
        })
    }

    static loginUser(body) {
        // eslint-disable-next-line no-async-promise-executor
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.post(url + "/login", body, {withCredentials: true});
                const data = res.data;
                resolve(data);
            } catch (err) {
                reject(err);
            }
        })
    }

    static registerUser(body) {
        // eslint-disable-next-line no-async-promise-executor
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.post(url, body );
                const data = res.data;
                resolve(data);
            } catch (err) {
                reject(err);
            }
        })
    }

    static isLoggedIn(axios) {
        // eslint-disable-next-line no-async-promise-executor
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url + '/isloggedin');
                const data = res.data;
                console.log("User is logged in?: ", data)
                resolve(data);
            } catch (err) {
                reject(err);
            }
        })
    }

}

export default userService;