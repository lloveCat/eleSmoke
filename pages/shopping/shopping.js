// pages/shopping/shopping.js
var model = require('../../utils/model.js')
var that = null;
var gwcProductIds = null;
var currentSelectList = []
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sumPrice: 0,
    gwcList: null,
    isEditor: false,
    isAllSelect: false,
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
        selected: 1
      })
    }
    var gwcList = new Array()
    gwcProductIds = wx.getStorageSync('gwcList') || []
    gwcProductIds.forEach(function (gwcRecord) {
      var product = model.getProductById(gwcRecord.productId)
      var productRecord = {
        product_id: product.id,
        product_img: product.img[0],
        product_name: product.name,
        product_price: product.price,
        product_standrad: product.standrad[gwcRecord.standrad],
        product_count: gwcRecord.count
      }
      gwcList.push(productRecord)
    })
    that.setData({
      gwcList: gwcList,
      sumPrice: 0,
      isEditor: false,
      isAllSelect: false,
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    that.setData({
      sumPrice: 0,
      gwcList: null,
      isEditor: false,
      isAllSelect: false,
    })
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
  selectAll(e) {
    var sum = 0
    currentSelectList = []
    if(!that.data.isAllSelect) {
      that.data.gwcList.forEach(function (v, index) {
        currentSelectList.push(index)
        sum = that.accAdd(sum, that.accMul(v.product_price, v.product_count))
      })
    }
    that.setData({
      isAllSelect: !that.data.isAllSelect,
      sumPrice: sum
    })
  },
  chooseProduct(e) {
    const values = e.detail.value
    var sum = 0
    currentSelectList = []
    values.forEach(function(value) {
      var valueInt = parseInt(value)
      currentSelectList.push(valueInt)
      sum = that.accAdd(sum, that.accMul(that.data.gwcList[valueInt].product_price, that.data.gwcList[valueInt].product_count))
    })
    that.setData({
      sumPrice: sum
    })
  },
  toProductPage(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/product/product?id=' + id,
    })
  },
  delCount(e) {
    const index = e.currentTarget.dataset.index
    var product = that.data.gwcList[index]
    if(product.product_count > 1) {
      product.product_count--
      gwcProductIds[index].count--
      wx.setStorage({
        key: 'gwcList',
        data: gwcProductIds,
      })
      that.setData({
        gwcList: that.data.gwcList
      })
    }
  },
  addCount(e) {
    const index = e.currentTarget.dataset.index
    var product = that.data.gwcList[index]
    if (product.product_count <999) {
      product.product_count++
      gwcProductIds[index].count++
      wx.setStorage({
        key: 'gwcList',
        data: gwcProductIds,
      })
      that.setData({
        gwcList: that.data.gwcList
      })
    }
  },
  accAdd(arg1, arg2){
    var r1, r2, m;
    try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
    try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
    m = Math.pow(10, Math.max(r1, r2))
    return (arg1 * m + arg2 * m) / m
  },
  accMul(arg1, arg2){
    var m = 0, s1 = arg1.toString(), s2 = arg2.toString();
    try { m += s1.split(".")[1].length } catch (e) { }
    try { m += s2.split(".")[1].length } catch (e) { }
    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)
  },
  toEditor(e) {
    currentSelectList = []
    that.setData({
      isEditor: !that.data.isEditor,
      sumPrice: 0,
      isAllSelect: false,
    })
  },
  delOrCal(e) {
    var isEditor = that.data.isEditor
    if(isEditor) {
      var length = currentSelectList.length
      if (length > 0) {
        var gwcList = that.data.gwcList
        for (var i = currentSelectList.length - 1; i >= 0; i--) {
          gwcList.splice(currentSelectList[i], 1)
          gwcProductIds.splice(currentSelectList[i], 1)
        }
        wx.setStorage({
          key: 'gwcList',
          data: gwcProductIds,
        })
        that.setData({
          sumPrice: 0,
          isAllSelect: false,
          gwcList: gwcList
        })
        wx.showToast({
          title: '删除' + length + '件商品',
          icon: 'success',
          duration: 2000,
        })
      }
    } else {
      console.log('结算')
    }
  }
})