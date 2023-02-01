const url = 'http://localhost:8080/api/threads/';

class threadService {
    // Get detections
    static getThreadList(axios) {
        // eslint-disable-next-line no-async-promise-executor
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url, {withCredentials: true});
                const data = res.data;
                resolve(
                    data);
            } catch (err) {
                reject(err);
            }
        })
    }

    static getThread(id, axios) {
        // eslint-disable-next-line no-async-promise-executor
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url+"/"+ id);
                const data = res.data;
                resolve(
                    data);
            } catch (err) {
                reject(err);
            }
        })
    }

    static search(searchText, axios) {
        // eslint-disable-next-line no-async-promise-executor
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.post(url+"/"+ "search", {"searchText": searchText });
                const data = res.data;
                resolve(
                    data);
            } catch (err) {
                reject(err);
            }
        })
    }


}

export default threadService;