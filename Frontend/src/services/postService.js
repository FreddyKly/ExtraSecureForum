import axios from 'axios';
const url = 'http://localhost:8080/api/answers/';

class postService {
    // Get detections
    static postAwnser(postObject) {
        // eslint-disable-next-line no-async-promise-executor
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.post(url, postObject);
                const data = res.data;
                resolve(
                    data);
            } catch (err) {
                reject(err);
            }
        })
    }


}

export default postService;