(()=>{
    const s=new Date('2019/01/01 00:00:00'),u=[86400,3600,60,1],l=['天','小时','分','秒'];
    const f=()=>{
        const d=Math.floor((Date.now()-s)/1000);
        const v=u.map((n,i)=>`${Math.floor(d/n)%(i?u[i-1]/n:Infinity)} ${l[i]}`);
        const c=document.querySelector('.copyright');
        if(c){
            const t=c.textContent.replace(/\s*\|.*$/,'');
            c.innerHTML=`${t} | 本站已稳定运行 ${v.join(' ')} <i class='fas fa-heartbeat' style='color:#ff6b6b;margin-left:8px;animation:heartbeat 1.5s infinite'></i>`;
        }
    };
    document.readyState==='loading'?document.addEventListener('DOMContentLoaded',f):f();
    setInterval(f,1000);
})();
