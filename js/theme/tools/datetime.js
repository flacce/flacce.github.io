/**
 * Hexo Theme Meow
 * 网站运行时间计算模块
 */

const initDatetime = () => {
  const runtimeElement = document.getElementById("runtime");
  if (!runtimeElement) return;
  
  const startDate = runtimeElement.getAttribute("data-startdate");
  if (!startDate) return;
  
  // 保存原始文本
  if (!runtimeElement.getAttribute('data-original-text')) {
    runtimeElement.setAttribute('data-original-text', runtimeElement.textContent);
  }
  
  const updateTime = () => {
    const now = new Date();
    const start = new Date(startDate);
    const diff = now.getTime() - start.getTime();
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    // 获取原始文本作为前缀
    const originalText = runtimeElement.getAttribute('data-original-text');
    runtimeElement.textContent = `${originalText}${days}天 ${hours}时 ${minutes}分 ${seconds}秒`;
    
    setTimeout(updateTime, 1000);
  };
  
  updateTime();
};

export default initDatetime;
