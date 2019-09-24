Component({
  data: {
    selected: 0,
    doMDIndex: -1,
    color: "#474747",
    selectedColor: "#D93E8A",
    list: [{
      pagePath: "/pages/main/main",
      text: "首页",
      iconPath: "/resources/images/shouye.png",
      selectedIconPath: "/resources/images/shouye-pink.png"
    }, {
        pagePath: "/pages/shopping/shopping",
        text: "购物",
        iconPath: "/resources/images/gouwu.png",
        selectedIconPath: "/resources/images/gouwu-pink.png"
      },
      {
        pagePath: "/pages/order/order",
        text: "订单",
        iconPath: "/resources/images/dingdan.png",
        selectedIconPath: "/resources/images/dingdan-pink.png"
      }]
  },
  attached() {
  },
  methods: {
    doMouseDown(e) {
      const data = e.currentTarget.dataset
      const selectId = data.index
      if(selectId !== this.data.selected) {
        this.setData({
          doMDIndex: selectId
        })
      }
    },
    doMouseUp(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      if (this.data.doMDIndex !== -1) {
        this.setData({
          doMDIndex: -1
        })
      }
      wx.switchTab({ url })
    }
  }
})
