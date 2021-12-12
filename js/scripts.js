var validate=function () {
   var year = document.getElementById("year").value
   var month = document.getElementById("month").value
   var day = document.getElementById("day").value
   var gender = document.getElementById("gender").value
   //var birthdayArray = birthday.split("/");
   //validation
  
   if (!year.match(/^\d\d\d\d$/)) {
      alert("Invalid year");
  } else if (month == "" || month <=0 || month >12 ) {
      alert("Invalid month");
  } 
  //else if (day= "" || day<=0 || day>31) {
    //alert("invalid day");
    
   
  //}
  else{

  var calculate=function(){
     var fyear=parseInt(year);

     
     var fmonth=parseInt(month);
   
     var fday=parseInt(day);
   
   
    

     var fcentury=parseInt(year.slice(0,2));
   
    
     
     var dayOfWeek=( ( (fcentury/4) -2*fcentury-1) + ((5*fyear/4) ) + ((26*(fmonth+1)/10)) + fday ) %7;
     var fdayOfWeek = Math.ceil(dayOfWeek)
      alert(fdayOfWeek)
      

      var gender = document.querySelector('input[name = "gender"]:checked').value;
      if (gender === "male"){

      }
      alert(gender)
      var day;
      switch (theDay) {
        case 0:
          day = "Sunday";
          break;
        case 1:
          day = "Monday";
          break;
        case 2:
          day = "Tuesday";
          break;
        case 3:
          day = "Wednesday";
          break;
        case 4:
          day = "Thursday";
          break;
        case 5:
          day = "Friday";
          break;
        case 6:
          day = "Saturday";
      }
      document.getElementById("tell").innerHTML = "you wer born on " + day;
      var gender = document.querySelector('input[name = "gender"]:checked').value;
      if (gender === "male")
      {
        var name;
        switch (theDay) {
          case 0:
            name = "Kwasi";
            break;
          case 1:
            name = "Kwadwo";
            break;
          case 2:
            name = "Kwabena";
            break;
          case 3:
            name = "Kwaku";
            break;
          case 4:
            name = "Yaw";
            break;
          case 5:
            name = "Kofi";
            break;
          case 6:
            name = "Kwame";
        }
        document.getElementById("Akran").innerHTML = "your name is " + name;
      }
      else{
      var name
      switch (theDay) {
        case 0:
          name = "Akosua";
          break;
        case 1:
          name = "Adwoa";
          break;
        case 2:
          name = "Abenaa";
          break;
        case 3:
          name = "Akua";
          break;
        case 4:
          name = "Yaa";
          break;
        case 5:
          name = "Afua";
          break;
        case 6:
          name = "Ama";
    }
    document.getElementById("Akran").innerHTML = "your name is " + name;
      }
    };
  }
   
  }
  calculate();


