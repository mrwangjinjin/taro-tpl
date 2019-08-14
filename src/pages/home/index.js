/*jshint esversion: 6 */
import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtButton} from 'taro-ui'
import { connect } from '@tarojs/redux'
import './index.scss'

@connect(
	({ home, common }) => ({
		...common,
		...home
	}),
	(dispatch) => ({
	})
)
class Home extends Component {

	config = {
		navigationBarTextStyle: 'black',
		navigationBarTitleText: '首页',
	}

	constructor(props) {
		super(props)
	}

	render () {
		return (
			<View className='page-container'>
			</View>
		)
	}
}

export default Home