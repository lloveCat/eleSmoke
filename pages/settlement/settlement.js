// pages/settlement/settlement.js
var that = null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    that = this
    that.addressIndex = -1 
    console.log(options)
    // var gwcFlag = options.gwcFlag
    // var order = JSON.parse(options.order);
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
    console.log(that.addressIndex)
    var addressList = wx.getStorageSync('addressList')
    if (that.addressIndex === -1 && addressList.length > 0) {
      that.addressIndex = 0
    }
    if (that.addressIndex !== -1) {
      console.log(addressList[that.addressIndex])
      that.setData({
        address: addressList[that.addressIndex]
      })
    }
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
  toChooseAddress(e) {
    wx.navigateTo({
      url: '/pages/address/address',
    })
  }
})