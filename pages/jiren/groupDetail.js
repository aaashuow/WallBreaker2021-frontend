// pages/jiren/groupDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: { 
    amITeamInitiator:true,
    dialog:{
      isDialogShow: false,
      content:"爬爬爬爬爬爬爬爬啊啊啊啊啊啊啊啊啊啊啊",
      hasInputBox:true,
      tip:"提示：爬",
      cancelText:"取消",
      okText:"确认",
      tapOkEvent:""
    },
    teamDetail:{
      title:'周末狼人杀',
      isTeamClosed: false,
      avatar:'',
      nickname: '龙龙',
      fromTime: '1天前',
      dueTime: '2天后结束',
      content: '周末狼人杀局',
      picturesNum:  0,
      pictures: [],
    },
    isFavourite:false,
    avatarList:[],
    currentUser:[],
    detail:{
      'title':'破·数学建模找队友，来来来！',
      'avatar':'https://s3-alpha.figma.com/profile/d6f5f7f8-2382-43db-bcff-8c585b068d02',
      'nickname':'小砂糖星',
      'fromTime':'3天前',
      'dueTime':'3天后结束'
    },
    applierList:[
      {
        'id':'001',
        'avatar':'https://s3-alpha.figma.com/profile/06efcf65-977c-4154-b8a3-3db3f6a2f79f',
        'nickname':'herobrine',
        'applyTime':'22分钟前'
      },
      {
        'id':'001',
        'avatar':'https://s3-alpha.figma.com/profile/dda831f2-b8ec-4bb9-b165-1708bad4fb9e',
        'nickname':'spark',
        'applyTime':'2小时前'
      },
      {
        'id':'002',
        'avatar':'https://tcs-devops.aliyuncs.com/thumbnail/1125d19274b242f1e0371f5aa532a3b0a998/w/200/h/200',
        'nickname':'熊熊熊熊熊',
        'applyTime':'1天前'
      },
      {
        'id':'003',
        'avatar':'http://tiebapic.baidu.com/forum/w%3D580%3B/sign=ef2e2225da11728b302d8c2af8c7c2ce/c995d143ad4bd1134dde1a864dafa40f4bfb0576.jpg',
        'nickname':'bananice',
        'applyTime':'2天前'
      },
      {
        'id':'005',
        'avatar':'http://tiebapic.baidu.com/forum/w%3D580%3B/sign=fa624952e31ea8d38a22740ca731324e/ac6eddc451da81cbf0437d241766d016082431b6.jpg',
        'nickname':'那我呢',
        'applyTime':'2天前'
      },
      {
        'id':'1024',
        'avatar':'http://tiebapic.baidu.com/forum/w%3D580%3B/sign=fa624952e31ea8d38a22740ca731324e/ac6eddc451da81cbf0437d241766d016082431b6.jpg',
        'nickname':'那我呢',
        'applyTime':'2天前'
      },
      {
        'id':'256',
        'avatar':'http://tiebapic.baidu.com/forum/w%3D580%3B/sign=fa624952e31ea8d38a22740ca731324e/ac6eddc451da81cbf0437d241766d016082431b6.jpg',
        'nickname':'那我呢',
        'applyTime':'2天前'
      },
      {
        'id':'222',
        'avatar':'http://tiebapic.baidu.com/forum/w%3D580%3B/sign=fa624952e31ea8d38a22740ca731324e/ac6eddc451da81cbf0437d241766d016082431b6.jpg',
        'nickname':'那我呢',
        'applyTime':'2天前'
      }

    ]

    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //拼接 发起人 和 参与者列表
    // {"avatar":"...","me":false,"initiator":false,"id":1}
    this.setData({avatarList:[
      {"initiator":true,"avatar":'https://s3-alpha.figma.com/profile/d6f5f7f8-2382-43db-bcff-8c585b068d02',id:1},
      {"me":true,"avatar":"https://s3-alpha.figma.com/profile/06efcf65-977c-4154-b8a3-3db3f6a2f79f",id:2},
      {"avatar":"https://s3-alpha.figma.com/profile/dda831f2-b8ec-4bb9-b165-1708bad4fb9e",id:3},
      {"avatar":"https://tcs-devops.aliyuncs.com/thumbnail/1125d19274b242f1e0371f5aa532a3b0a998/w/200/h/200"},
      {"avatar":"http://tiebapic.baidu.com/forum/w%3D580%3B/sign=ef2e2225da11728b302d8c2af8c7c2ce/c995d143ad4bd1134dde1a864dafa40f4bfb0576.jpg"},
      {"avatar":"http://tiebapic.baidu.com/forum/w%3D580%3B/sign=fa624952e31ea8d38a22740ca731324e/ac6eddc451da81cbf0437d241766d016082431b6.jpg"},{},{},{},{}
    ]});
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

  },

// 以下是和 发起者 initiator 有关的操作事件 ---------start---------------------
  handleCloseTeam: function(){
    let dialog = {
      isDialogShow: true,
      content:"请填写结束招募理由，理由将被队内成员看到",
      hasInputBox:true,
      tip:"提示：结束组队招募后，将无法查看队友联系方式",
      cancelText:"取消",
      okText:"确认",
      tapOkEvent:"dialogTapOkForCloseTeam"
    };
    this.setData({
      dialog
    })
  },
  dialogTapOkForCloseTeam:function(e){
    this.setData({
      'teamDetail.isTeamClosed':true
    })
    console.log(e);
  },
  showAnswers:function(){

  },
  acceptApplying: function(e){
    console.log(e.currentTarget.dataset);
    let applyer = e.currentTarget.dataset;
    let dialog = {
      isDialogShow: true,
      content:'确定同意 ' + applyer.applyername  + ' 加入组队？',
      hasInputBox:false,
      tip:"",
      cancelText:"取消",
      okText:"确认",
      tapOkEvent:"dialogTapOkForAcceptApplying"
    };
    this.setData({
      dialog
    })
  },
  dialogTapOkForAcceptApplying:function(){
    wx.showToast({
      title: '接受id为'+'的申请',
    })
  },
  refuseApplying: function(e){
    let applyer = e.currentTarget.dataset;
    let dialog = {
      isDialogShow: true,
      content:'确定拒绝 ' + applyer.applyername  + ' 加入组队？',
      hasInputBox:false,
      tip:"",
      cancelText:"取消",
      okText:"确认",
      tapOkEvent:"dialogTapOkForRefuseApplying"
    };
    this.setData({
      dialog
    })
  },
  dialogTapOkForRefuseApplying:function(){
    wx.showToast({
      title: '拒绝id为'+'的申请',
    })
  },


  


  tapAvatar:function(e){
    this.setData({"currentUser":e.detail});
    console.log(this.data.currentUser);
    this.selectComponent("#personalAnimation").showModal(this.data.currentUser.userAvatar);
    
  },

  seeDetail:function(e){
    console.log("查看全部")
  },
  tapFavourite:function(){
    if(this.data.isFavourite==false){

      wx.showToast({
        title: '已加入收藏',
        icon: 'none',
        duration: 1000
      })
      this.setData({isFavourite:true});
    }
    else{
      wx.showToast({
        title: '已取消收藏',
        icon: 'success',
        duration: 1000
      })
      this.setData({isFavourite:false});
    }
    this.onLoad();
  },

  tapOk:function(e){
    console.log("点击确认之后的业务");
    wx.showToast({
      title: '爬了',
      icon: 'none',
      duration: 1000
    })
    wx.navigateTo({
      url: '/pages/jiren/answerQuestion',
    })
  },
  
})