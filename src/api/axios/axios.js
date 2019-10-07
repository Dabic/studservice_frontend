import ax from 'axios'

const axios = ax.create({
    //baseURL: 'http://192.168.1.229:8000/studserviceapp-api/',
    baseURL: 'http://127.0.0.1:8000/studserviceapp-api/',
    headers: {
        'Content-Type': 'application/json',
        Authorization: ''
    }
})

export default axios