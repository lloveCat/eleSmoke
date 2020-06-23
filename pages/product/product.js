// pages/product/product.js
var model = require('../../utils/model.js')
var that = null
var access_token = null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    product: null,
    level: 0,
    goodEval: 0,
    middleEval: 0,
    badEval: 0,
    isCollect: false,
    isDetail: true,
    isPrepareBuy: false,
    standradIndex: 0,
    showEvaluations: null,
    productCount: 1,
    isShare: false,
    qrCodeData: null,
    isShowSaveQrCode: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    that = this

    const productId = parseInt(options.id)
    if (productId === null) {
      that.illegalId()
      return
    }

    var productInfo = model.getProductById(productId)
    if (productInfo === null) {
      that.illegalId()
      return
    }

    wx.request({
      method: 'get',
      url: 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wxb491ee5a3dde60d8&secret=abc0e54e183e56cacb06d41c33045b64',
      success: res => {
        if (res.statusCode === 200) {
          access_token = res.data.access_token
        }
      },
      fail: res => {
        console.log('网络异常，获取access_token失败')
      }
    })

    var goodEval = 0
    var middleEval = 0
    var badEval = 0
    var showEvaluation = new Array()
    var collectList = wx.getStorageSync("collectList")
    var isCollect = false
    if (collectList !== null && collectList.indexOf(productId) !== -1) {
      isCollect = true
    }
    productInfo.evaluation.forEach(function(evall) {
      showEvaluation.push(evall)
      if (evall.level === 0) {
        goodEval++
      } else if (evall.level === 1) {
        middleEval++
      } else badEval++
    })
    that.setData({
      product: productInfo,
      goodEval: goodEval,
      middleEval: middleEval,
      badEval: badEval,
      isCollect: isCollect,
      showEvaluations: showEvaluation
    })
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
  illegalId: function() {
    wx.showToast({
      title: '请求非法，请重新尝试',
      duration: 5000,
      icon: 'none'
    })
    setTimeout(function() {
      wx.navigateBack({})
    }, 5000)
  },
  previewImage: function(e) {
    if (that.checkIsShade()) return;
    const currentSrc = e.currentTarget.dataset.src
    wx.previewImage({
      current: currentSrc,
      urls: that.data.product.img,
    })
  },
  previewDetailImage: function(e) {
    if (that.checkIsShade()) return;
    const currentSrc = e.currentTarget.dataset.src
    wx.previewImage({
      current: currentSrc,
      urls: that.data.product.details,
    })
  },
  goToGWC(e) {
    if (that.checkIsShade()) return;
    wx.switchTab({
      url: '/pages/shopping/shopping',
    })
  },
  prepareBuy(e) {
    const id = parseInt(e.currentTarget.id)
    const prepareBuy = that.data.isPrepareBuy
    if (!that.checkIsShade()) {
      that.setData({
        isPrepareBuy: true
      })
    }
    if (!prepareBuy) return
    switch (id) {
      case 1:
        wx.showLoading({
          title: '正在提交',
          mask: true
        })
        var findFlag = false
        var gwcList = wx.getStorageSync('gwcList') || []
        gwcList.forEach(function(gwc) {
          if (gwc.productId === that.data.product.id && gwc.standrad === that.data.standradIndex) {
            findFlag = true
            gwc.count += that.data.productCount
          }
        })
        if (!findFlag) {
          var gwc = new Object()
          gwc.productId = that.data.product.id
          gwc.standrad = that.data.standradIndex === -1 ? 0 : that.data.standradIndex
          gwc.count = that.data.productCount
          gwcList.push(gwc)
        }
        wx.setStorage({
          key: 'gwcList',
          data: gwcList,
        })
        wx.hideLoading()
        wx.showToast({
          title: '加入购物车成功',
          icon: 'success',
          duration: 2000
        })
        that.setData({
          isPrepareBuy: false
        })
        break;
      case 2:
        var order = {
          productId: that.data.product.id,
          standrad: that.data.standradIndex === -1 ? 0 : that.data.standradIndex,
          count: that.data.productCount
        }
        var orderJSON = JSON.stringify(order)
        wx.navigateTo({
          url: '/pages/settlement/settlement?gwcFlag=false&order=' + orderJSON,
        })
        break;
      default:
        break;
    }
  },
  chooseSD(e) {
    var sdIndex = e.currentTarget.dataset.sdindex
    if (sdIndex === that.data.standradIndex) sdIndex = -1
    that.setData({
      standradIndex: sdIndex
    })
  },
  toDetail: function(e) {
    if (that.checkIsShade()) return;
    if (that.data.isDetail === false) {
      that.setData({
        isDetail: true
      })
    }
  },
  toEval: function(e) {
    if (that.checkIsShade()) return;
    if (that.data.isDetail === true) {
      that.setData({
        isDetail: false
      })
    }
  },
  chooseEvaluation: function(e) {
    if (that.checkIsShade()) return;
    const chooseLevel = parseInt(e.currentTarget.dataset.level)
    var evaluationss = new Array()
    var product = that.data.product;

    product.evaluation.forEach(function(evall) {
      if (chooseLevel === 0 || (chooseLevel === (evall.level + 1))) {
        evaluationss.push(evall)
      }
    })
    that.setData({
      level: chooseLevel,
      showEvaluations: evaluationss
    })
  },
  doCollect: function(e) {
    var collectList = wx.getStorageSync("collectList") || new Array()
    var isCollect = true;
    if (that.data.isCollect === true) {
      var collectIndex = collectList.indexOf(that.data.product.id)
      collectList.splice(collectIndex, 1)
      isCollect = false
    } else {
      collectList.push(that.data.product.id)
      isCollect = true
    }
    wx.setStorage({
      key: 'collectList',
      data: collectList,
    })
    that.setData({
      isCollect: isCollect
    })
  },
  goHome: function(e) {
    wx.switchTab({
      url: "/pages/main/main"
    })
  },
  closePrepareBuy(e) {
    that.setData({
      isPrepareBuy: false
    })
  },
  checkIsShade() {
    return (that.data.isPrepareBuy || that.data.isShare || that.data.isShowSaveQrCode);
  },
  delCount(e) {
    var nowCount = that.data.productCount
    if (nowCount === 1) {
      return
    } else {
      that.setData({
        productCount: (nowCount - 1)
      })
    }
  },
  addCount(e) {
    var nowCount = that.data.productCount
    if (nowCount === 999) {
      wx.showToast({
        title: '数量最多为999',
        duration: 1000
      })
      return
    } else {
      that.setData({
        productCount: (nowCount + 1)
      })
    }
  },
  inputCount(e) {
    const valueCount = parseInt(e.detail.value) || parseInt('1')
    var count = valueCount;
    if (valueCount < 1) {
      count = 1
    }
    that.setData({
      productCount: count
    })
  },
  doShare(e) {
    if (that.checkIsShade()) return;
    that.setData({
      isShare: true
    })
  },
  closeShare(e) {
    that.setData({
      isShare: false,
    })
  },
  getQrCode(e) {
    wx.request({
      method: 'POST',
      responseType: 'arraybuffer',
      url: 'https://api.weixin.qq.com/wxa/getwxacode?access_token=' + access_token,
      data: {
        "path": "/pages/product/product?id=" + that.data.product.id,
        "width": 500
      },
      success: res => {
        if (res.statusCode === 200) {
          var qrCodeData = wx.arrayBufferToBase64(res.data)
          wx.getFileSystemManager().writeFile({
            filePath: wx.env.USER_DATA_PATH + '/QrCode.png',
            data: qrCodeData,
            encoding: 'base64',
            success: res => {
              that.setData({
                isShare: false,
                isShowSaveQrCode: true,
                qrCodeData: wx.env.USER_DATA_PATH + '/QrCode.png'
              })
            }
          })
        }
      },
      fail: res => {
        wx.showToast({
          title: '网络异常',
          icon: 'none',
          duration: 2000,
        })
      }
    })
  },
  closeSaveQrCode(e) {
    that.setData({
      isShowSaveQrCode: false
    })
  },
  saveQrCode(e) {
    wx.saveImageToPhotosAlbum({
      filePath: wx.env.USER_DATA_PATH + '/QrCode.png',
      success: ress => {
        console.log(ress)
      },
      fail: ress => {
        console.log(ress)
      }
    })
  }
})