import axios from 'axios';
const url = 'http://localhost:8080/api/posts/';

class postService {
    // Get detections
    static getPostList() {
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
}

export default postService;