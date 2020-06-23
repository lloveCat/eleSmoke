// pages/address/address.js
var Address = require('../../utils/address.js')
var that = null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressList: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    that = this
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    var addressList = wx.getStorageSync('addressList') || []
    that.setData({
      addressList: addressList
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  getSystemAddress(e) {
    wx.chooseAddress({
      success: res => {
        var addressList = wx.getStorageSync('addressList') || []
        var address = new Address(res.userName, res.telNumber, res.cityName, res.countyName, res.provinceName, res.detailInfo)
        if(address.checkIfExist(addressList)) {return}
        addressList.push(address)
        wx.setStorage({
          key: 'addressList',
          data: addressList,
        })
      }
    })
  },
  addAddress(e) {
    wx.navigateTo({
      url: 'addAddress',
    })
  },
  chooseAddress(e) {
    const index = e.currentTarget.dataset.index
    console.log(index)
    var pages = getCurrentPages()
    var prePage = pages[pages.length - 2]
    console.log(prePage.addressIndex)
    prePage.addressIndex = index
    wx.navigateBack({
      delta: 1,
    })
  }
})