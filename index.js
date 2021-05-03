setInterval(()=>{
    d=new Date();
    h=d.getHours();
    m=d.getMinutes();
    s=d.getSeconds();
    hrot=30*h+0.5*m;
    mrot=6*m;
    srot=6*s;
    hr.style.transform=`rotate(${hrot}deg)`
    min.style.transform=`rotate(${mrot}deg)`
    sec.style.transform=`rotate(${srot}deg)`
},1000)