let self
let dialog = {
  showModal(options){
    self = getCurrentPages()[getCurrentPages().length-1]
    let config = {
      type:'', //设置弹窗种类
      title:'', // 设置弹窗标题
      content:'', // 设置弹窗文本信息
      style:'', // 设置弹窗样式
      icon:'', // 设置弹窗icon
      shade:false, // 是否显示背景遮罩
      shadeClose:true, // 是否点击背景关闭弹窗
      time:0, // 倒计时 毫秒
      btns:null // 按钮组
    }
    
  }
}