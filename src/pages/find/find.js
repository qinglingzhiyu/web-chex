import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './find.scss'

export default class Find extends Component {

    config = {
    navigationBarTitleText: '发现'
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
