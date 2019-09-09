function time() {
  var date=new Date();
  var hours=date.getHours().toString(16);
  var minutes=date.getMinutes().toString(16);
  var seconds=date.getSeconds().toString(16);

 var arr=[hours,minutes,seconds].map(function(num){
      return (num<10) ? '0'+num : String(num); });

      hours=arr[0];
      minutes=arr[1];
      seconds=arr[2];

      return hours + ' : ' +  minutes + ' : ' + seconds;
}

function output(time)
{
var color= ' # ' + time;
document.body.bgColor=color;
document.querySelector('.time').textContent=color;
}



setInterval( function()
{
	output( time() )
} , 1000 );
