// pages/address/addAddress.js
var Address = require('../../utils/address.js')
var address = new Address('','','','','','')
var that = null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    city: ''
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
  chooseCity(e) {
    const city = e.detail.value
    address.province = city[0]
    address.city = city[1]
    address.county = city[2]
    that.setData({
      city: city[0] + city[1] + city[2]
    })
  },
  saveReceiver(e) {
    address.name = e.detail.value
  },
  savePhone(e) {
    address.phone = e.detail.value
  },
  saveDetail(e) {
    address.detail = e.detail.value
  },
  saveAddress(e) {
    if(address.checkEmpty()) {
      wx.showToast({
        title: '输入项不能为空',
        icon: 'none',
        duration: 2000,
      })
    } else {
      var addressList = wx.getStorageSync('addressList') || []
      if(address.checkIfExist(addressList)) {
        wx.showToast({
          title: '该地址已存在',
          icon: 'none',
          duration: 2000,
        })  
        return
      }
      addressList.push(address)
      wx.setStorage({
        key: 'addressList',
        data: addressList,
      })
      wx.showToast({
        title: '添加地址成功',
        icon: 'succes',
        duration: 2000,
      })
      setTimeout(function () { wx.navigateBack({})}, 2000)
      
    }
  }
})