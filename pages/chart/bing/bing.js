var wxCharts = require('../../../utils/wxcharts.js');
var thisChart = null;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.showChartBing()
  },

  showChartBing() {
    var windowWidth = 320;
    try {
      var res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;

    } catch (e) {
      console.error('getSystemInfoSync failed!');
    }
    console.log('windowWidth-->' + windowWidth);
    thisChart = new wxCharts({
      animation: true,
      canvasId: 'thisCanvas',
      type: 'pie',
      series: [{
        name: '电影',
        data: 100,
        color: 'yellow',
      }, {
        name: '音乐',
        data: 35,
      }, {
        name: '小说',
        data: 78,
      }, {
        name: '戏剧',
        data: 63,
      }],
      width: windowWidth,
      height: 400,
      dataLabel: true,
    });
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