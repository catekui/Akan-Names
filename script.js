var maleNames = ['Kwasi', 'Kwadwo', ' Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
var femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];


function check(){
    var gender = document.getElementById('gender').value;
    var day = document.getElementById('day').value;
    var dd = parseInt(day);
    var month = document.getElementById('month').value;
    var mm = parseInt(month);
    var year = document.getElementById('year').value;
    var cc = parseInt(year.slice(0,2));
    var yy = parseInt(year.slice(2,4));
    var yr = parseInt(year);

    var birthday = new Date (yr+"/" + mm +"/" + dd) 
    var dayWeek = birthday.getDay()
    
    if (day === "" ){
        alert("Please enter the day details");

    } 
    else if (month === ""){
        alert("Please enter the month details")
    }
    else if (year === ""){
        alert("Please enter the year details")
    }    
    else {

        if (dd <= 0 || dd > 31){
            alert("Invalid Date")
        } else if (mm <= 0 || mm > 12  || mm == 2 && dd > 29){
            alert("Invalid Month");
        } 
        else if (yr <= 0 || yr > 2022){
            alert("Invalid Year")
        } 
        if (gender === 'male'){
            alert('Your Aka Name is ' + maleNames[dayWeek])
        } else if (gender === 'female'){
            alert('Your Aka Name is ' + femaleNames[dayWeek])
        } 
    }
}
function refreshPage(){
    window.location.reload();
} 
