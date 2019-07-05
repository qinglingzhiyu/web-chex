/*
 * @Author: terris
 * @Github: https://github.com/qinglingzhiyu
 * @Date: 2019-07-02 10:10:15
 * @LastEditors: terris
 * @LastEditTime: 2019-07-05 19:10:10
 * @Description: 首页
 */

import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Swiper, SwiperItem } from '@tarojs/components'
import TopBanner from './topBanner'
import CarBanner from './carBanner'
import location from './assets/location.png'
import message from './assets/message.png'
import search from './assets/search.png'
import washingImg from './assets/1001.png'
import maintainImg from './assets/1002.png'
import tireImg from './assets/1003.png'
import rescueImg from './assets/1004.png'
import signImg from './assets/1005.png'
import redpackImg from './assets/redpack.png'
import handpick from './assets/handpick.png'
import './main.scss'

class Main extends Component {
  config = {
    navigationBarTitleText: '首页'
  }

  state = {
    navList:[
      {
        icon: washingImg,
        title: '洗车服务'
      },
      {
        icon: maintainImg,
        title: '大小保养'
      },
      {
        icon: tireImg,
        title: '换轮胎'
      },
      {
        icon: rescueImg,
        title: '道路救援'
      },
      {
        icon: signImg,
        title: '每日签到'
      },
    ]
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const { navList } = this.state
    return (
      <View className='main'>
        <View className='main_search'>
          <Image className='main_search-location-img' src={location} />
          <Text className='main_search-location-text'>上海</Text>
          <View className='main_search-input'>
            <Image className='main_search-input-img' src={search} />
            <Text className='main_search-input-text'>免费洗车</Text>
          </View>
          <Image className='main_search-message' src={message} />
        </View>
        <View className='main-topbanner'>
          <TopBanner></TopBanner>
        </View>
        <View className='main-carbanner'>
          <CarBanner></CarBanner>
        </View>
        <View className='main-nav'>
          {navList.map( (nav,index)=>{
            return (
              <View key={index} className='main-nav-item'>
                <Image className='main-nav-item-img' src={nav.icon} />
                <Text className='main-nav-item-text'>{nav.title}</Text>
              </View>
            )})}
        </View>
        <View className='main-redpack'>
          <Image className='main-redpack-img' src={redpackImg} />
        </View>
        <View className='main-handpick'>
          <Image className='main-handpick-img' src={handpick} />
          <Swiper className='main-handpick-swiper'>
            <SwiperItem className='main-handpick-swiper-item'>
              一车独秀APP荣登store下载我们荣尽可
            </SwiperItem>
          </Swiper>
        </View>
      </View>
    )
  }
}

export default Main
