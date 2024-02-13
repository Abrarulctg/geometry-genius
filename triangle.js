/**
 * Objective: Get base, height of a triangle. Calculate the area by using the provide formula. and then display the area.
 * Step-1: Get base value
 * step-2 : Added in id in the base input field
 * step-3 : use getElementById to access the input field
 * step-4 : get value from the input field (Value is string now)
 * step-5 : convert the value to a number. (use parseFloat)
 */

function calculateTriangleArea() {
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText)
    console.log(base)

    const triangleHeightInput = document.getElementById('triangleHeight');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText)
    console.log(height)


    //Calculating Area
    const area = 0.5 * base * height;
    console.log(area);

    // Display Triangle Area
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;
}