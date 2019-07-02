/*
 * @Author: terris
 * @Github: https://github.com/qinglingzhiyu
 * @Date: 2019-06-27 11:23:44
 * @LastEditors: terris
 * @LastEditTime: 2019-07-01 16:12:07
 * @Description: 这是全局配置
 */

import "@tarojs/async-await";
import Taro, { Component } from "@tarojs/taro";
import { Provider } from "@tarojs/redux";

import Index from "./pages/index";

import configStore from "./store";

import "./app.scss";

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== "production" && process.env.TARO_ENV === "h5")  {
//   require("nerv-devtools")
// }

const store = configStore();

class App extends Component {
  config = {
    pages: [
      "pages/main/main",
      "pages/find/find",
      "pages/shop/shop",
      "pages/mine/mine",
      "pages/index/index"
    ],
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#fff",
      navigationBarTitleText: "一车独秀",
      navigationBarTextStyle: "black"
    },
    tabBar: {
      selectedColor: "#da251d",
      color: "#999999",
      backgroundColor: "#ffffff",
      list: [
        {
          pagePath: "pages/main/main",
          text: "首页",
          iconPath: "./assets/tab-bar/home@2x.png",
          selectedIconPath: "./assets/tab-bar/home_ed@2x.png"
        },
        {
          pagePath: "pages/find/find",
          text: "发现",
          iconPath: "./assets/tab-bar/find@2x.png",
          selectedIconPath: "./assets/tab-bar/find_ed@2x.png"
        },
        {
          pagePath: "pages/shop/shop",
          text: "门店",
          iconPath: "./assets/tab-bar/shop@2x.png",
          selectedIconPath: "./assets/tab-bar/shop_ed@2x.png"
        },
        {
          pagePath: "pages/mine/mine",
          text: "我的",
          iconPath: "./assets/tab-bar/mine@2x.png",
          selectedIconPath: "./assets/tab-bar/mine_ed@2x.png"
        }
      ]
    },
    debug: true,
    navigateToMiniProgramAppIdList: [
      "wxc09b6f8459436eb5",
      "wx092776e02ebf899c"
    ],
    permission: {
      "scope.userLocation": {
        desc: "你的位置信息将用于展示附近的门店"
      }
    },
    // sitemapLocation: "sitemap.json"
  };

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    );
  }
}

Taro.render(<App />, document.getElementById("app"));
