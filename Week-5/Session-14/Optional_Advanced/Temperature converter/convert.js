window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   // TODO: Complete the function
   const cInput = document.getElementById("cInput");
   const fInput = document.getElementById("fInput");

   cInput.addEventListener("input", () => {
      fInput.value = ""
   });

   fInput.addEventListener("input", () => {
      cInput.value = ""
   });

   document.getElementById("convertButton").addEventListener("click", () => {
      if(cInput.value){
         if(isNaN(parseFloat(cInput.value))){
            document.getElementById("errorMessage").innerHTML = `${cInput.value} is not a number`;
         } else {
            fInput.value = convertCtoF(parseFloat(cInput.value));
            document.getElementById("errorMessage").innerHTML = '';
         }
      }
      else if(fInput.value){
         if(isNaN(parseFloat(fInput.value))){
            document.getElementById("errorMessage").innerHTML = `${fInput.value} is not a number`;
         } else {
            cInput.value = convertFtoC(parseFloat(fInput.value));
            document.getElementById("errorMessage").innerHTML = '';
         }
      }
      changeImage(fInput.value)
   })
}

function changeImage(degreesFahrenheit){
   const weatherImage = document.getElementById("weatherImage");
   if(degreesFahrenheit < 32) {
      weatherImage.src = "cold.png";
   } else if(degreesFahrenheit >= 32 && degreesFahrenheit < 50){
      weatherImage.src = "cool.png";
   } else {
      weatherImage.src = "warm.png";
   }
}

function convertCtoF(degreesCelsius) {
   // TODO: Complete the function
   return degreesCelsius * 9/5 + 32;
}

function convertFtoC(degreesFahrenheit) {
   // TODO: Complete the function
   return (degreesFahrenheit - 32) * 5/9;
}
