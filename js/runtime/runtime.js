var now=new Date;function createtime(){var e=new Date("10/14/2022 07:13:00");now.setTime(now.getTime()+250);var t=(now-e)/1e3/60/60/24,n=Math.floor(t),a=(now-e)/1e3/60/60-24*n,r=Math.floor(a);1==String(r).length&&(r="0"+r);var s=(now-e)/1e3/60-1440*n-60*r,o=Math.floor(s);1==String(o).length&&(o="0"+o);var i=(now-e)/1e3-86400*n-3600*r-60*o,l=Math.round(i);1==String(l).length&&(l="0"+l);let g="";g=r<18&&r>=9?`<img class='boardsign' src='https://npm.elemecdn.com/anzhiyu-blog@2.0.4/img/badge/安知鱼-上班摸鱼中.svg' \n    title='距离月入25k也就还差一个大佬带我~'><span class='textTip'> <br> 本站居然运行了 ${n} 天</span><span id='runtime'> \n    ${r} 小时 ${o} 分 ${l} 秒 </span> <i class='fas fa-heartbeat' style='color:red'></i>`:`<img class='boardsign' src='https://npm.elemecdn.com/anzhiyu-blog@2.0.4/img/badge/安知鱼-下班啦.svg' \n    title='下班了就该开开心心的玩耍，嘿嘿~'><span class='textTip'> <br> 本站居然运行了 ${n} 天</span><span id='runtime'> \n    ${r} 小时 ${o} 分 ${l} 秒 </span> <i class='fas fa-heartbeat' style='color:red'></i>`,document.getElementById("workboard")&&(document.getElementById("workboard").innerHTML=g)}setInterval((()=>{createtime()}),250);