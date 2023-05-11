function getInput(){
    let nameField = document.getElementById('name').value;
    let preferences = [
        document.getElementById('choice_1').value,
        document.getElementById('choice_2').value,
        document.getElementById('choice_3').value,
        document.getElementById('choice_4').value,
        document.getElementById('choice_5').value,
    ];

    let result = document.getElementById('result').innerText;

    result.textContent = preferences.toString();
}


function dropDown(){
    let pref = [0,0,0,0,0]
    document.getElementById('result').textContent = document.getElementById('flavors').value

}




    
