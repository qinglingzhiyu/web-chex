/*
 * @Author: terris
 * @Github: https://github.com/qinglingzhiyu
 * @Date: 2019-07-04 10:40:16
 * @LastEditors: terris
 * @LastEditTime: 2019-07-04 16:30:22
 * @Description: 首页顶部banner
 */

import Taro, { Component } from '@tarojs/taro';
import { Swiper, SwiperItem, Image } from '@tarojs/components';
import topBg from './assets/top-bg.png';
import './index.scss';

export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <Swiper className='banner'>
        <SwiperItem>
          <Image className='banner-img' src={topBg} />
        </SwiperItem>
      </Swiper>
    )
  }
}
