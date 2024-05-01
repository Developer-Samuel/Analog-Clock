$(document).ready(function() {
    const deg = 6;
    const hour = $(".hour");
    const min = $(".minute");
    const sec = $(".second");
  
    const setClock = () => {
      let day = new Date();
      let hh = day.getHours() * 30;
      let mm = day.getMinutes() * deg;
      let ss = day.getSeconds() * deg;
  
      hour.css("transform", `rotateZ(${hh + mm / 12}deg)`);
      min.css("transform", `rotateZ(${mm}deg)`);
      sec.css("transform", `rotateZ(${ss}deg)`);
    };
  
    setClock();
  
    setInterval(setClock, 1000);
});
  