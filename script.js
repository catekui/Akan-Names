var maleNames = ['Kwasi', 'Kwadwo', ' Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
var femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];


function check(){
    var gender = document.getElementById('gender').value;
    var day = document.getElementById('day').value;
    var dd = parseInt(day);
    var month = document.getElementById('month').value;
    var mm = parseInt(month);
    var year = document.getElementById('year').value;
    var yy = parseInt(year);
    var cc = (yy - 1)/100 +1 ;

    var dayWeek = parseInt(((cc/4) -2*cc-1) + ((5*yy/4)) + ((26*(mm+1)/10)) + dd)%7;
    
    
    if (dd < 1 || dd > 31){
        alert("Invalid Date")
    } else if (mm <= 0 || mm > 12  || mm == 2 && dd > 29){
        alert("Invalid Month");
    } else if (yy <= 0 || yy > 2022){
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
