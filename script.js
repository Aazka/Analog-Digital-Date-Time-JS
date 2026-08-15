 function showDate()
    {
        const dateTime=document.querySelector('.DateTime');
        let today=new Date();
        let day=today.getDay();
        let month=today.getMonth();
        let year=today.getFullYear();  
        var date=day+"/"+month+"/"+year;
        dateTime.innerHTML=date;
    }
    showDate();
    // Digital Clock
    function showTimer(){
        const clock=document.querySelector('.Clock');
        let date=new Date();
        let hour=date.getHours();
        let minute=date.getMinutes();
        let second=date.getSeconds();
        let session="AM";
        if(hour>12){
            hour=hour-12;
            session="PM";
        }
        if(hour==0){
            hour=12;
        }
        hour=(hour<10)?"0"+hour:hour;
        minute=(minute<10)?"0"+minute:minute;
        second=(second<10)?"0"+second:second;
        var time=hour+":"+minute+":"+second+" "+session;
        //console.log(hour,minute,second);
        clock.innerHTML=time;
        setTimeout(showTimer,1000);
    }
    showTimer();

//Analog Clock
 const secondHand = document.querySelector('.second-hand');
  const minsHand = document.querySelector('.min-hand');
  const hourHand = document.querySelector('.hour-hand');

  function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  }

  setInterval(setDate, 1000);

  setDate();