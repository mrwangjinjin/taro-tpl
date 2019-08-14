/*jshint esversion: 6 */
import '@tarojs/async-await';
import Taro, { Component } from '@tarojs/taro';
import { Provider } from '@tarojs/redux';
import dva from '@utils/dva';
import models from '@models';
import Home from '@pages/home';
import 'taro-ui/dist/style/index.scss';
import './app.scss';

// dvajs
const dvaApp = dva.createApp({
	initialState: {},
	models: models,
})
const store = dvaApp.getStore()

class App extends Component {

	config = {
		pages: [
			'pages/home/index',
		],
		window: {
			backgroundTextStyle: 'dark',
			navigationBarBackgroundColor: '#fff',
		}
	}

	// 在 App 类中的 render() 函数没有实际作用
	// 请勿修改此函数
	render () {
		return (
			<Provider store={store}>
				<Home />
			</Provider>
		)
	}
}

Taro.render(<App />, document.getElementById('app'))