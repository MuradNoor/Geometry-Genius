document.getElementById('calculate').addEventListener('click', function(){
    const inputBase = document.getElementById('triangle-base');
    const baseValue = inputBase.value;
    const base = parseFloat(baseValue);

    const inputHeight = document.getElementById('triangle-height');
    const heightValue = inputHeight.value;
    const height = parseFloat(heightValue);

    const area = 0.5 * base * height;
    
    const calculatedArea = document.getElementById('triangle-area');
    calculatedArea.innerText = area;
})