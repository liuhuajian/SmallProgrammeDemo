var wxCharts = require('../../../utils/wxcharts.js');
var lineChart = null;

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
    this.showChartLine()
  },

  createSimulationData: function () {
    var categories = [];
    var data = [];
    for (var i = 0; i < 7; i++) {
      categories.push('01/' + (i + 25));
      // data.push(Math.random() * (20 - 10) + 10);
    }
    // data[4] = null;
    return {
      categories: categories,
      // data: data
    }
  },

  showChartLine() {
    var windowWidth = 320;
    try {
      var res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      console.error('getSystemInfoSync failed!');
    }

    var simulationData = this.createSimulationData();
    lineChart = new wxCharts({
      canvasId: 'thisCanvas',
      type: 'line',
      categories: simulationData.categories,
      animation: true,
      // background: '#f5f5f5',
      series: [{
        name: '每日新增用户数量',
        data: [50, 30, 19, 55, 80, 60, 27],
        format: function (val, name) {
          return val.toFixed(1)+'台';
        }
      }, {
        name: '每日订单数',
        data: [30, 45, 88, 30, 66, 45, 72],
        format: function (val, name) {
          return val.toFixed(1) + '台';
        }
      }],
      xAxis: {
        disableGrid: false,
        type: 'calibration',
      },
      yAxis: {
        title:'成交量',
        format: function (val) {
          return val.toFixed(0);
        },
        min: 0,
      },
      width: windowWidth,
      height: 300,
      //是否在图表中显示数据内容值
      dataLabel: false,
      //是否在图表中显示数据点图形标识
      dataPointShape: true,
      //是否显示图表下方各类别的标识
      legend:true,
      extra: {
        //可选值：curve曲线，straight直线 (default)
        lineStyle: 'straight',
      }
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
})