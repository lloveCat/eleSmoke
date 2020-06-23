// myComponents/paomadeng/paomadeng.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    text: {
      type: String,
      value: 'ILoveEwei'
    },
    size: {
      type: String,
      value: '20rpx'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    marqueeDistance: -575,
    size: 20,
    interval: 50,
    marqueePace: 1
  },

  /**
   * 组件的方法列表
   */
  methods: {
    scrolling: function() {
      var _this = this;
      var timer = setInterval(function(){
        if (_this.data.marqueeDistance < _this.data.length) {
          _this.setData({
            marqueeDistance: _this.data.marqueeDistance + _this.data.marqueePace
          })
        } else {
          _this.setData({
            marqueeDistance: -575
          })
        }
      }, _this.data.interval)
    },
    check_chinese: function(check_str) {
      var chineseArray = [];
      check_str.replace((/[\u4e00-\u9fa5]/gm), function () {
        var text = arguments[0];
        var index = arguments[arguments.length - 2];
        chineseArray.push({
          text: text,
          index: index
        });
        return text;
      });
      return chineseArray.length;
    }  
  },
  attached: function (e) {
    var _this = this;
    var chanese_length = _this.check_chinese(_this.data.text)
    var number_length = _this.data.text.length - chanese_length;
    var length = chanese_length * _this.data.size + number_length * Math.ceil(_this.data.size / 2) + 30;
    _this.setData({
      length: length,
    });
    _this.scrolling();
  }
})
