/*jshint esversion: 6 */
import Taro from '@tarojs/taro'
import HomeAPI from './service'

export default {

	namespace: 'home',
	
	state: {
	},

	effects: {
		* init(_, { call, put, select }) {
			const { token } = yield select(state => state.common)
			const { data } = yield call(HomeAPI.init, {}, token) 
		},
	},

	reducers: {
		save(state, { payload }) {
			return { ...state, ...payload }
		},
	},
}