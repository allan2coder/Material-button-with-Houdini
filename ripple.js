registerPaint('ripple', class {
  static get inputProperties() { 
    return ['--animation-tick', '--ripple-x', '--ripple-y']; 
  }

  // Canvas 画圆
  paint(ctx, geom, properties) {
    // 点击事件的坐标，作为画圆的圆形
    const x = parseFloat(properties.get('--ripple-x').toString());
    const y = parseFloat(properties.get('--ripple-y').toString());
    // 当前倒计时剩余时间
    let tick = parseFloat(properties.get('--animation-tick').toString());

    // 倒计时在1秒内，超出，Canvas 画圆动作结束
    if(tick < 0) tick = 0;
    if(tick > 1000) tick = 1000;

    ctx.fillStyle = '#ddd'; // 水波纹的颜色
    ctx.globalAlpha = 0.5; // 背景透明度

    ctx.arc(
      x, y, // 圆心坐标
      geom.width * tick/1000, // 半径
      0, // 起始角
      2 * Math.PI, // 结束角
    );

    ctx.fill();
  }
});