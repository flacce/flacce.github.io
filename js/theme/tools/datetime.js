/**
 * Hexo Theme Meow
 * 网站运行时间计算模块
 * 
 * 此模块计算网站从指定日期开始运行的总天数
 * 并将结果显示在页面上的运行时间元素中
 */

const initDatetime = () => {
  // 页面加载时执行一次
  const runtimeElement = document.getElementById("runtime");
  if (!runtimeElement) return;
  
  const startDate = runtimeElement.getAttribute("data-startdate");
  if (!startDate) return;
  
  // 计算从指定日期到现在的天数
  const now = new Date();
  const start = new Date(startDate);
  const dayInMs = 1000 * 60 * 60 * 24;
  const totalDays = Math.floor((now.getTime() - start.getTime()) / dayInMs);
  
  // 直接替换天数
  runtimeElement.textContent = runtimeElement.textContent.replace(/\.\S+/, `.${totalDays}天`);
};

export default initDatetime;
