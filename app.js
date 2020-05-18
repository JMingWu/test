//app.js
App({
  globalData: {
    name: '张三',
    age: 18,
    url_prefix: 'http://localhost:8000'
    // url_prefix: 'http://47.111.155.102'
  },

  onLaunch: function () {

    wx.checkSession({
      success() {
        //已经登陆
        wx.redirectTo({
          url: '../index/index',
        })
      },
      fail() {
        //未登陆
        wx.getSetting({
          success: function (res) {
            if (res.authSetting['scope.userInfo']) {
              if (wx.getStorageSync('login_info_id')) {
                //用户已授权
                console.log("已授权");
                wx.redirectTo({
                  url: '../index/index',
                })
              } else {
                console.log('用户授权无缓存')
                wx.redirectTo({
                  url: '../login/login',
                })
              }
            } else {
              //用户没有授权
              console.log("用户没有授权");
              wx.redirectTo({
                url: '../login/login',
              })
            }
          }
        });
      }
    })

  },

})
