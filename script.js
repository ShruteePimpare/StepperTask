let currentStep = 0;

function nextStep() {
    if (currentStep < 5) {
        currentStep++;
        document.getElementById(`step${currentStep}`).classList.add('completed');
    }
}

function previousStep() {
    if (currentStep > 0) {
        document.getElementById(`step${currentStep}`).classList.remove('completed');
        currentStep--;
    }
}
