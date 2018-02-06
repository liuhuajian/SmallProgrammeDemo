var user = 'hahaha';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    slider: [
      { picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000000rVobR3xG73f.jpg' },
      { picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000000j6Tax0WLWhD.jpg' },
      { picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000000a4LLK2VXxvj.jpg' },
    ],
    swiperCurrent: 0,
  },

  swiperChange: function (e) {
    this.setData({
      swiperCurrent: e.detail.current
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var o = {
      user: "追梦子",
      fn: function () {
        console.log('function-->'+this.user);  //追梦子
      }
    }
    var k = {
      user: "小畜生",
      fn: function () {
        console.log('function-->' + this.user);  //小畜生
      }
    }
    var oo = o.fn;
    oo.call(o);
    // oo();
    // let pn = o.fn();
    // let kn = k.fn();
  },

  goto_page_bing:function(){
    wx.navigateTo({
      url: '../chart/bing/bing',
    })
  },

  goto_page_line: function () {
    wx.navigateTo({
      url: '../chart/line/line',
    })
  },

  goto_page_column: function () {
    wx.navigateTo({
      url: '../chart/column/column',
    })
  },

  goto_page_test:function(){
    wx.navigateTo({
      url: '../test/test',
    })
  },

  touchHandler: function (e) {
    console.log(pieChart.getCurrentDataIndex(e));
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
    
  }
})
