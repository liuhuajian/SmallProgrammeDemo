// map.js
Page({
  data:{
    jingdu_content:"未获取",
    weidu_content:"未获取"
  },

  showMap:function(){
    var that = this;
    wx.getLocation({
      success: function(res) {
        var latitude = res.latitude;
        var longitude = res.longitude;
        console.log("latitude-->" + latitude + "---longitude-->" + longitude);
        that.setData({
          jingdu_content:longitude,
          weidu_content:latitude
        })
        that.moveToLocation();
        that.getCenterLocation();
        // that.translateMarker();
        // wx.openLocation({
        //   latitude: latitude,
        //   longitude: longitude,
        //   scale: 28
        // })
      },
    })
  },


  onReady: function (e) {
    // 使用 wx.createMapContext 获取 map 上下文
    this.mapCtx = wx.createMapContext('myMap')
  },

  getCenterLocation: function () {
    this.mapCtx.getCenterLocation({
      success: function (res) {
        console.log(res.longitude)
        console.log(res.latitude)
      }
    })
  },

  moveToLocation: function (res) {
    this.mapCtx.moveToLocation()
  },

  translateMarker: function () {
    this.mapCtx.translateMarker({
      // iconPath: this.images/book_map_icon.png,
      markerId: 0,
      autoRotate: true,
      duration: 1000,
      destination: {
        latitude: 23.10229,
        longitude: 113.3345211, 
        // latitude: lat,
        // longitude: long,
      },
      animationEnd() {
        console.log('animation end')
      }
    })
  },

  includePoints: function () {
    this.mapCtx.includePoints({
      padding: [10],
      points: [{
        latitude: 23.10229,
        longitude: 113.3345211,
      }, {
        latitude: 23.00229,
        longitude: 113.3345211,
      }]
    })
  }
})