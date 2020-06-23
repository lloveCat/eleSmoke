const data = [{
  type_id: "0001",
  type_txt: "新品推荐",
  products: [{
      id: 1,
      img: ["/resources/images/product_1.png", "/resources/images/product_1.png", "/resources/images/product_1.png"], //产品图片路径
      name: "草莓", //产品名称（简介）
      price: 59.6, //价格
      oriprice: 100, //原价格
      savo: 100, //销量
      inventory: 5000, //库存
      standrad: ["默认"],
      details: ["/resources/images/product_1.png", "/resources/images/product_1.png", "/resources/images/product_1.png"],
      evaluation: [{
        level: 0,
        name: "赖晖晖",
        time: "2019/9/29",
        txt: "草莓真不错，性价比高，买来很好吃，一下子就吃完了"
      }, {
        level: 1,
        name: "赖晖晖",
        time: "2019/9/29",
          txt: "草莓还行吧，总的来说还不错，就是有些不新鲜"
      }, {
        level: 2,
        name: "赖晖晖",
        time: "2019/9/29",
          txt: "草莓不新鲜，都烂了"
      }]
    },
    {
      id: 2,
      img: ["/resources/images/product_2.png", "/resources/images/product_2.png", "/resources/images/product_2.png"],
      name: "相机",
      price: 88.8,
      oriprice: 200, //原价格
      savo: 800, //销量
      inventory: 5000, //库存
      standrad: ["默认"],
      details: ["/resources/images/product_2.png", "/resources/images/product_2.png", "/resources/images/product_2.png"],
      evaluation: [{
        level: 0,
        name: "赖晖晖",
        time: "2019/9/29",
        txt: "相机真不错，像素高，性价比高，外观很漂亮，家人很喜欢拍出来的下过"
      }, {
        level: 1,
        name: "赖晖晖",
        time: "2019/9/29",
          txt: "相机还行吧，没什么新意，就那样"
      }, {
        level: 2,
        name: "赖晖晖",
        time: "2019/9/29",
          txt: "相机接过来都裂开了一点，怎么回事"
      }]
    },
    {
      id: 3,
      img: ["/resources/images/product_3.png", "/resources/images/product_3.png", "/resources/images/product_3.png"],
      name: "香水",
      price: 66.6,
      oriprice: 120, //原价格
      savo: 200, //销量
      inventory: 5000, //库存
      standrad: ["默认"],
      details: ["/resources/images/product_3.png", "/resources/images/product_3.png", "/resources/images/product_3.png"],
      evaluation: [{
        level: 0,
        name: "赖晖晖",
        time: "2019/9/29",
        txt: "香水真不错，外观漂亮，气味很香，非常喜欢"
      }, {
        level: 1,
        name: "赖晖晖",
        time: "2019/9/29",
          txt: "香水还行吧，没什么新意"
      }, {
        level: 2,
        name: "赖晖晖",
        time: "2019/9/29",
          txt: "香水有点难闻，哎，浪费钱"
      }]
    },
  ]
}, {
  type_id: "0002",
  type_txt: "清新款",
  products: [{
      id: 4,
      img: ["/resources/images/product_4.png", "/resources/images/product_4.png", "/resources/images/product_4.png"], //产品图片路径
      name: "洗面奶", //产品名称（简介）
      price: 88.8, //价格
      oriprice: 128, //原价格
      savo: 567, //销量
      inventory: 3400, //库存
      standrad: ["默认"],
    details: ["/resources/images/product_4.png", "/resources/images/product_4.png", "/resources/images/product_4.png"],
      evaluation: [{
        level: 0,
        name: "赖晖晖",
        time: "2019/9/29",
        txt: "洗面奶真不错，洗的脸很干净，很适合我"
      }, {
        level: 1,
        name: "赖晖晖",
        time: "2019/9/29",
          txt: "洗面奶还行吧，洗的干净，但是洗完后脸有点干"
      }, {
        level: 2,
        name: "赖晖晖",
        time: "2019/9/29",
          txt: "洗面奶洗完后，脸吹干后脱皮，是不是吸水性太强了"
      }]
    },
    {
      id: 5,
      img: ["/resources/images/product_5.jpg", "/resources/images/product_5.jpg", "/resources/images/product_5.jpg"],
      name: "椅子",
      price: 36.8,
      oriprice: 100, //原价格
      savo: 800, //销量
      inventory: 5000, //库存
      standrad: ["默认"],
      details: ["/resources/images/product_5.jpg", "/resources/images/product_5.jpg", "/resources/images/product_5.jpg"],
      evaluation: [{
        level: 0,
        name: "赖晖晖",
        time: "2019/9/29",
        txt: "椅子很漂亮，坐着很舒服"
      }, {
        level: 1,
        name: "赖晖晖",
        time: "2019/9/29",
          txt: "椅子还行吧，普通"
      }, {
        level: 2,
        name: "赖晖晖",
        time: "2019/9/29",
          txt: "椅子有些绷带都断了，寄了个垃圾货给我"
      }]
    },
    {
      id: 6,
      img: ["/resources/images/product_6.jpg", "/resources/images/product_6.jpg", "/resources/images/product_6.jpg"],
      name: "相框",
      price: 12.6,
      oriprice: 47, //原价格
      savo: 200, //销量
      inventory: 5000, //库存
      standrad: ["默认"],
      details: ["/resources/images/product_6.jpg", "/resources/images/product_6.jpg", "/resources/images/product_6.jpg"],
      evaluation: [{
        level: 0,
        name: "赖晖晖",
        time: "2019/9/29",
        txt: "相框真不错，大小合适，还漂亮，下次还在这里买，哈哈哈哈哈哈哈啊哈哈"
      }, {
        level: 1,
        name: "赖晖晖",
        time: "2019/9/29",
          txt: "相框还行吧，总的来说还不错"
      }, {
        level: 2,
        name: "赖晖晖",
        time: "2019/9/29",
          txt: "垃圾"
      }]
    },
  ]
}]

const getAllTypes = function() {
  var types = new Array()
  data.forEach(function(typeProduct) {
    types.push({
      type_id: typeProduct.type_id,
      type_name: typeProduct.type_txt
    })
  })
  return types
}
const getProductsByType = function(typeId) {
  for (var i = 0; i < data.length; i++) {
    if (data[i].type_id === typeId) {
      return data[i]
    }
  }
  return null
}

const getProductById = function(productId) {
  for (var i = 0; i < data.length; i++) {
    for (var j = 0; j < data[i].products.length; j++) {
      if (data[i].products[j].id === productId) {
        return data[i].products[j]
      }
    }
  }
  return null
}
const getData = function() {
  return data
}

module.exports = {
  getAllTypes: getAllTypes,
  getProductsByType: getProductsByType,
  getProductById: getProductById,
  getData: getData
}