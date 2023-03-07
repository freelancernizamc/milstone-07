// digital watch
function digitalClock() {
    const date = new Date();
  
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
  
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
  
    const time = hours + ":" + minutes + ":" + seconds;
  
    document.getElementById("clock").innerText = time;
  
    setTimeout(digitalClock, 1000);
  }
  
  digitalClock();

  // Video 40-1 What is debugging and common types of errors
  // Video 40-2 Understand syntax errors messages
  // 40-7 Money Master debugging fix id and value error ( part 2)
  // 40-8 Money Master debugging fix balance and remaining ( part 3)

