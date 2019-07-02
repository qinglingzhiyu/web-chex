import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './shop.scss'

export default class Shop extends Component {

    config = {
    navigationBarTitleText: '首页'
    }

    componentWillMount() { }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    render() {
    return (
        <View className='index'>
            <Text>Hello world!</Text>
        </View>

    )
    }
}
