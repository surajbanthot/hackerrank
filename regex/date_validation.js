var regex = /^[0-9]{2}[\/][0-9]{2}[\/][0-9]{4}$/g;

var dates = ["2009-10-09", "2009.10.09", "2009/10/09", "200910-09", "1990/10/09", 
    "2016/0/09", "2017/10/09", "2016/09/09", "20/09/2016", "21/09/2016", "22/09/2016",
    "23/09/2016", "19/09/2016", "18/09/2016", "25/09/2016", "21/09/2018"];

//Iterate array
dates.forEach(
    function(date){
        console.log(date + " matches with regex?");
      console.log(regex.test(date));
    });