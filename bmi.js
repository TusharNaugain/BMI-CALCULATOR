function calculateBMI() {
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const resultDiv = document.getElementById('result');
  
    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);
  
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
      resultDiv.innerHTML = 'Please enter valid height and weight values.';
      return;
    }
  
    const bmi = weight / ((height / 100) * (height / 100));
    const roundedBMI = bmi.toFixed(2);
  
    resultDiv.innerHTML = `Your BMI is: ${roundedBMI}`;
  }
  
