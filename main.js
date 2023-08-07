const btn = document.getElementById('calculate');

btn.addEventListener('click', function() {
    let height = document.querySelector('#height').value;
    let weight = document.querySelector('#weight').value;

    // Check if height and weight are empty
    if (height === '' || weight === '') {
        alert('Please fill out the input fields!');
        return;
    }

    // Convert height to meters
    height = height / 100;

    // Convert height and weight to numbers
    height = parseFloat(height);
    weight = parseFloat(weight);

    // Check if height and weight are valid numbers
    if (isNaN(height) || isNaN(weight)) {
        alert('Invalid input. Please enter valid numbers.');
        return;
    }

    // Calculate BMI
    let BMI = weight / (height * height);
    BMI = BMI.toFixed(2);

    document.querySelector('#result').innerHTML = BMI;
    let status = '' ;
    if(BMI <18.5){
        status="Underweight";

    }
    if (BMI >= 18.5 && BMI < 25){
        status = "Healthy";
    }
    if(BMI >=25 && BMI < 30){
        status="Overweight";
    }
    if(BMI >=30){
        status = "extreme";
    }

    document.querySelector('.comment').innerHTML = ` Comment: You are <span id="comment">${status}</span>`;
});

