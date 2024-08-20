function showInfo() {
    let name = document.getElementById("name").value;
    let Age = document.getElementById("age").value;
    let Phone = document.getElementById("telephone").value;
    let email = document.getElementById("email").value;
    
    const output = document.getElementById('output');
    output.innerHTML = `<strong>Name:</strong> ${name} </br>
    <strong>Age:</strong> ${Age} </br>
    <strong>Phone no:</strong> ${Phone} </br>
    <strong>Email:</strong> ${email} </br>`;



       
    
}



