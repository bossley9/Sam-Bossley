
//CLOCK FUNCTION
tday = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
tmonth = new Array("January","February","March","April","May","June","July","August","September","October","November","December");

var x = function () {
    var d=new Date();
    var nday=d.getDay(),nmonth=d.getMonth(),ndate=d.getDate(),nyear=d.getYear();
    if(nyear<1000) nyear+=1900;
    var d=new Date();
    var nhour=d.getHours(),nmin=d.getMinutes(),nsec=d.getSeconds(),ap;

    if(nhour==0){ap=" AM";nhour=12;}
    else if(nhour<12){ap=" AM";}
    else if(nhour==12){ap=" PM";}
    else if(nhour>12){ap=" PM";nhour-=12;}

    if(nmin<=9) nmin="0"+nmin;
    if(nsec<=9) nsec="0"+nsec;

    document.getElementById('weekday').innerHTML = tday[nday];
    document.getElementById('date').innerHTML = ndate + " " + tmonth[nmonth] + " " + nyear;
    document.getElementById('time').innerHTML = nhour + " : " + nmin + " : " + nsec + ap;
}

x();
setInterval(x, 1000);

//BACKGROUND FUNCTION
//var backNum = 3;

//document.getElementById('back-cover').style.backgroundImage = "url(img/" + (Math.floor(Math.random() * backNum) + 1) + ".png)";
