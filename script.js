var maleNames = ['Kwasi', 'Kwadwo', ' Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
var femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];


function check(){
    var gender = document.getElementById('gender').value;
    var day = document.getElementById('day').value;
    var dd = parseInt(day);
    var month = document.getElementById('month').value;
    var mm = parseInt(month);
    var year = document.getElementById('year').value;
    var cc =parseInt(year.slice(0,2));
    var yy = parseInt(year.slice(2,4));
    var yr = parseInt(yr)

    var dayWeek = Math.abs(parseInt(((cc/4) - 2*cc-1) + ((5*yy/4)) + ((26*(mm+1)/10)) + dd)%7);
    
    
    if (dd <= 0 || dd > 31){
        alert("Invalid Date")
    } else if (mm <= 0 || mm > 12  || mm == 2 && dd > 29){
        alert("Invalid Month");
    } 
    else if (yr <= 0 || yr > 2022){
        alert("Invalid Year")
    } 

    if (gender === 'male'){
        alert('your Akaname is ' + maleNames[dayWeek])
    } else if (gender === 'female'){
        alert('Your Akaname is ' + femaleNames[dayWeek])
    } 
}
function refreshPage(){
    window.location.reload();
} 
