/*jshint esversion: 6 */
import Request from '@utils/request'

const HomeAPI = {

    init: (data, token) => Request({
        url: '/',
        method: 'GET',
        data,
        token
    }),
}

export default HomeAPI