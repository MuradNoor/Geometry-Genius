// calculate rectangle area
function calculateRectangleArea(){
    // const inputWidth = document.getElementById('rectangle-base');
    // const widthValue = inputWidth.value;
    const width = calculateArea('rectangle-base');
    const height = calculateArea('rectangle-height');
    const area = width * height;
    calculateFinalArea('rectangle-area', area);
}

// calculate parallelogram area
function calculateParallelogramArea(){
    const P_Base = calculateArea('parallelogram-base');
    const P_Height = calculateArea('parallelogram-height');
    const area = P_Base * P_Height;
    calculateFinalArea('parallelogram-area', area);
}

// Rhombus Area Calculation
function RhombusAreaCalculation(){
    const rdistance1 = calculateArea('rhombus-base');
    const rdistance2 = calculateArea('rhombus-height');
    const area = 0.5 * rdistance1 * rdistance2;
    calculateFinalArea('rhombus-area', area);
}

//Pentagon Area Calculation
function calculatePentagonArea(){
    const pWidth = calculateArea('pentagon-base');
    const pHeight = calculateArea('pentagon-height');
    const area = 0.5 * pWidth * pHeight;
    calculateFinalArea('pentagon-area', area);
}

// Ellipse Area Calculation
function calculateEllipseArea(){
    const eWidth = calculateArea('ellipse-base');
    const eHeight = calculateArea('ellipse-height');
    const area = 3.1416 * eWidth * eHeight;
    calculateFinalArea('ellipse-area', area);
}

// common calculation function
function calculateArea(inputValue){
    const inputText = document.getElementById(inputValue);
    const textValue = inputText.value;
    const value = parseFloat(textValue);
    return value;
}

// calculate common final result
function calculateFinalArea(finalValue, finalArea){
    const finalText = document.getElementById(finalValue);
    finalText.innerText = finalArea;
}