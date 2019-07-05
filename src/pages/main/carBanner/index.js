/*
 * @Author: terris
 * @Github: https://github.com/qinglingzhiyu
 * @Date: 2019-07-04 10:40:16
 * @LastEditors: terris
 * @LastEditTime: 2019-07-05 11:13:37
 * @Description: 首页中间banner
 */

import Taro, { Component } from '@tarojs/taro';
import { Swiper, SwiperItem, Image, View, Text } from '@tarojs/components';
import defaultCar from './assets/default-car.png';
import './index.scss';

export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <Swiper className='banner' circular nextMargin='23px'>
        <SwiperItem>
          <View className='banner-item'>
            <Image className='banner-item-img' src={defaultCar} />
            <View className='banner-item-container'>
              <View className='banner-item-container-top'>
                <Text className='banner-item-container-top-text'>添加爱车</Text>
                <Text className='banner-item-container-top-auth'>认证有理</Text>
              </View>
              <View className='banner-item-container-middle'>
                <Text className='banner-item-container-middle-title'>违章 <Text className='banner-item-container-middle-num'> 0 </Text></Text>
                <Text className='banner-item-container-middle-title'>扣<Text className='banner-item-container-middle-num'> 0 </Text>分</Text>
                <Text className='banner-item-container-middle-title'>罚款<Text className='banner-item-container-middle-num'> 0 </Text>元</Text>
              </View>
              <View className='banner-item-container-bottom'>
                <Text className='banner-item-container-bottom-text'>添加车辆，完善信息，给您爱车保养提醒</Text>
              </View>
            </View>
          </View>
        </SwiperItem>
        <SwiperItem>
          <View className='banner-item'>
            <Image className='banner-item-img' src={defaultCar} />
            <View className='banner-item-container'>
              <View className='banner-item-container-top'>
                <Text className='banner-item-container-top-text'>添加爱车</Text>
                <Text className='banner-item-container-top-auth'>认证有理</Text>
              </View>
              <View className='banner-item-container-middle'>
                <Text className='banner-item-container-middle-title'>违章 <Text className='banner-item-container-middle-num'>0</Text></Text>
                <Text className='banner-item-container-middle-title'>扣<Text>0</Text>分</Text>
                <Text className='banner-item-container-middle-title'>罚款<Text className='banner-item-container-middle-num'>0</Text>元</Text>
              </View>
              <View className='banner-item-container-bottom'>
                <Text className='banner-item-container-bottom-text'>添加车辆，完善信息，给您爱车保养提醒</Text>
              </View>
            </View>
          </View>
        </SwiperItem>
      </Swiper>
    );
  }
}
