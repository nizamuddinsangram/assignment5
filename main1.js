let siNo=0;
document.getElementById('first-calculate').addEventListener('click',function(){
 siNo+=1;
 const firstGeometryName=document.getElementById('first-header').innerText;
 const triangleInputField1=document.getElementById('first-input-field1');
 const triangleFirstInput=triangleInputField1.value;
 const triangleInputField2=document.getElementById('second-input-field1');
 const triangleSecondInput=triangleInputField2.value;
 const constantValue=parseFloat("0.50");
 const btn="convert";
 const firstGeometryCalculation=constantValue*(triangleFirstInput*triangleSecondInput);
 const firstGeometryFinalCalculation=firstGeometryCalculation.toFixed(2);
 displayData(siNo,firstGeometryName,firstGeometryFinalCalculation,btn);
//  
triangleInputField1.value='';
triangleInputField2.value='';
})
 
document.getElementById('second-calculate').addEventListener('click',function(){
 siNo+=1;   
const secondGeometryName=document.getElementById('second-geometry-name').innerText;
const rectangleInputField1=document.getElementById('first-input-field2');
const rectangleFirstInput=rectangleInputField1.value;
const rectangleInputField2=document.getElementById('second-input-field2');
const rectangleSecondInput=rectangleInputField2.value;
const btn="convert";
const secondGeometryCalculation=rectangleFirstInput*rectangleSecondInput;
displayData(siNo,secondGeometryName,secondGeometryCalculation,btn);
// 
rectangleInputField1.value='';
rectangleInputField2.value='';
})




document.getElementById('third-calculate').addEventListener('click',function(){
    siNo+=1;     
 const thirdGeometryName=document.getElementById('third-geometry-name').innerText;
 const firstInputField=document.getElementById('first-input-field3');
 const firstInput=firstInputField.value;
 const secondInputField=document.getElementById('second-input-field3');
 const secondInput=secondInputField.value;
 const btn="convert";
 const thirdGeometryCalculation=firstInput*secondInput;
 displayData(siNo,thirdGeometryName,thirdGeometryCalculation,btn)

 
 firstInputField.value='';
 secondInputField.value='';
})
// 



document.getElementById('four-calculation').addEventListener('click',function(){
    siNo+=1;     
 const fourGeometryName=document.getElementById('fourth-geometry-name').innerText;
 const firstInputField=document.getElementById('first-input-field4');
 const firstInput=firstInputField.value;
 const secondInputField=document.getElementById('second-input-field4');
 const secondInput=secondInputField.value;

 const btn="convert";
 const constantValue=parseFloat("0.50");
 const fourthGeometryCalculation=constantValue*firstInput*secondInput;
 displayData(siNo,fourGeometryName,fourthGeometryCalculation,btn);

 
 firstInputField.value='';
 secondInputField.value='';
})


document.getElementById('five-calculation').addEventListener('click',function(){
    siNo+=1;     
 const fifthGeometryName=document.getElementById('fifth-geometry-name').innerText;
 const firstInputField=document.getElementById('first-input-field5');
 const firstInput=firstInputField.value;
 const secondInputField=document.getElementById('second-input-field5');
 const secondInput=secondInputField.value;
 const constantValue=parseFloat("0.50");
 const btn="convert";
 const fiveGeometryCalculation=constantValue*firstInput*secondInput;

 displayData(siNo,fifthGeometryName,fiveGeometryCalculation,btn)

 
 firstInputField.value='';
 secondInputField.value='';
})

document.getElementById('six-calculation').addEventListener('click',function(){
    siNo+=1;     
    
 const sixGeometryName=document.getElementById('sixth-geometry-name').innerText;

 const firstInputField=document.getElementById('first-input-field6');
 const firstInput=firstInputField.value;
 const secondInputField=document.getElementById('second-input-field6');
 const secondInput=secondInputField.value;
 const constantValue=parseFloat("3.1416");
 const btn="convert";
 const sixGeometryCalculation=constantValue*firstInput*secondInput;
 displayData(siNo,sixGeometryName,sixGeometryCalculation,btn)

 
 firstInputField.value='';
 secondInputField.value='';
})

































function displayData(siNo,geometryName,calculation,button){
    const container=document.getElementById('container');
    const tr=document.createElement('tr');
    tr.innerHTML=`
     <td>${siNo}</td>
     <td>${geometryName}</td>
     <td>${calculation}cm<sup>2</sup></td>
     <td><button class='btn hover:bg-blue-500 btn-sm bg-blue-400 border-0'>${button}</button></button></td>
   
    `
    container.appendChild(tr);
    tr.style.margin='10';
}












document.getElementById('blog').addEventListener('click',function(){
   window.location.href='blog.html'
})




//  const container=document.getElementById('container');
//  const tr=document.createElement('tr');
//  tr.innerHTML=`
//   <td>${1}</td>
//   <td>${firstHeader}</td>
//   <td>${area}cm<sup>2</sup></td>
//   <td><button class='btn hover:bg-blue-500 btn-sm bg-blue-400 border-0'>${btn}</button></button></td>

//  `
//  container.appendChild(tr);
//  tr.style.margin='10';

// const getColor=() => {
//     const randomNumber=Math.floor(Math.random()*16777215)
//     const randomCode= "#" +randomNumber.toString(16);
//     document.body.style.backgroundColor=randomCode;
//     document.getElementById('').innerText=randomCode;


// }
// document.getElementsByClassName("card").addEventListener("click",getColor){
   
// }
// getColor();
const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('card').style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;
  }
  
  card.addEventListener("mouseover", setBg);
  setBg();
 