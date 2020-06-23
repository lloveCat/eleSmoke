// pages/main/main.js
var that = null;
var model = require("../../utils/model.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    top_img: ["/resources/images/eleSmokeAd.jpg",
              "/resources/images/eleSmokeAd2.jpg"], 
    product_labels: ["足重保障","坏单包退","产地直发","地标产品"],
    product_types: [
      {
        type_page: "",
        type_img: "/resources/images/night-yellow.png",
        type_txt: "新品推荐"
      },{
        type_page: "",
        type_img: "/resources/images/night-purple.png",
        type_txt: "清新款"
      },{
        type_page: "",
        type_img: "/resources/images/video-red.png",
        type_txt: "耐摔款"
      },{
        type_page: "",
        type_img: "/resources/images/video-purple.png",
        type_txt: "靓丽款"
      },{
        type_page: "",
        type_img: "/resources/images/vision-green.png",
        type_txt: "农家生禽"
      },{
        type_page: "",
        type_img: "/resources/images/vision-yellow.png",
        type_txt: "茶具茶宠"
      },{
        type_page: "",
        type_img: "/resources/images/history-green.png",
        type_txt: "土产干货"
      },{
        type_page: "",
        type_img: "/resources/images/history-yellow.png",
        type_txt: "永春篾香"
      },{
        type_page: "",
        type_img: "/resources/images/history-yellow.png",
        type_txt: "手工艺品"
      },{
        type_page: "",
        type_img: "/resources/images/history-yellow.png",
        type_txt: "会员中心"
      }
      ],
      gg_img: "/resources/images/gg-white.png",
      isMoreDown:false,
      product_list: model.getData()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that = this;
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected:  0
      })
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  toTypePage: function(e){
    const data = e.currentTarget.dataset;
    var type_page = data.page;
    console.log('用户点击去往 ', type_page,'页面');
  },
  onMouseDown: function(e) {
    console.log('用户点击more更多',this.data.isMoreDown)
    this.setData({
      isMoreDown: true
    })
  },
  onMouseUp: function (e) {
    this.setData({
      isMoreDown: false
    })
    wx.navigateTo({
      url: '/pages/seckill/seckill',
    })
  },
  doToastGG: function (e) {
    wx.showToast({
      title: '此处应有对话框',
      duration: 2000
    })
  },
  toProductPage: function(e) {
    const productId = e.currentTarget.dataset.productid;
    wx.navigateTo({
      url: '/pages/product/product?id=' + productId,
    })
  }
  // dodddodododod: function(e) {
  //   var productOrder = this.data.product_list[0].products.sort(function(a,b) {
  //     return (a.price - b.price)
  //   })
  //   var productList = this.data.product_list;
  //   productList[0].products = productOrder;
  //   this.setData({
  //     product_list: productList
  //   })
  // }
})