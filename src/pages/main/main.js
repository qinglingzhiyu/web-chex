import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import location from './assets/location.png'
import message from './assets/message.png'
import search from './assets/search.png'
import './main.scss'

class Main extends Component {
  config = {
    navigationBarTitleText: '首页'
  }

  state = {
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className='main'>
        <View className='main_search'>
          <Image className='main_search-location-img' src={location} />
          <Text className='main_search-location-text'>上海</Text>
          <View className='main_search-input'>
            <Image className='main_search-input-img' src={message} />
            <Text className='main_search-input-text'>免费洗车</Text>
          </View>
          <Image className='main_search-message' src={search} />
        </View>
      </View>
    )
  }
}

export default Main
