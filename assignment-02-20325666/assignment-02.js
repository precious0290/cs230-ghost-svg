//https://developer.mozilla.org/en-US/docs/Web/API/Document/createElementNS used this for the animation things
//if i take it out the code doesnt run
/*
var changeColour=document.createElementNS("http://www.w3.org/2000/svg","changeColour");
    changeColour.setAttribute("id","ghostieAnimation");
    changeColour.setAttribute("attributeName","fill");
    changeColour.setAttribute("values","pink;blue;red;yellow");
    changeColour.setAttribute("dur","3s");
   changeColour.setAttribute("repeatCount","indefinite");
   var currentElement=document.getElementById('mouth');
    currentElement.appendChild(changeColour);
     ->originally had this and played around and took it out
*/
    //download
//export

function ColourChange(){

    document.getElementById('colourChangeC').beginElement(); //this function is for the colour change
    document.getElementById('colourChangeB').beginElement();
    console.log("Hello");
    
}
function Size(){
    document.getElementById('sizeChangeL').beginElement();
    document.getElementById('sizeChangeR').beginElement();
    console.log("Hello");
    
}
function Disappear(){
    document.getElementById('mouthGone').beginElement();
    console.log("Hello");
    
}
function spin(){
     document.getElementById('moveRP').beginElement();
     document.getElementById('moveLP').beginElement();
    console.log("Hello");
    
}
function rotate(){
  
    document.getElementById('rotating').beginElement();
    console.log("Hello");
    
}
function ChangeEyebrowShape()
{
    document.getElementById('angwyR').beginElement();
    document.getElementById('angwyL').beginElement();
    console.log("Hello");
}
var svgStart="<svg width=\"400\" height=\"480\"viewBox=\"0 0 100 120\">";
var svgEnd ="</svg>";
var ghostieS= document.getElementById('ghostieS')
/*function Download(){
    var a = document.body.appendChild(document.createElement('a'));
   a.download ="svg.html";//was export.html
    a.href = "data:text/html," +svgStart +document.getElementById("ghostieSVG").innerHTML + svgEnd; 
    a.click();
   console.log("hi"); //the download is not working properly for me for some reason->https://stackoverflow.com/questions/29702758/html-button-to-save-div-content-using-javascript
} */
function Download() {
  const svg = document.getElementById('ghostieSVG').outerHTML;
  const blob = new Blob([svg.toString()]);
  const element = document.createElement("a");
  element.download = "ghostieSVG.svg";
  element.href = window.URL.createObjectURL(blob);
  element.click(); //https://stackoverflow.com/questions/57798877/button-for-downloading-svg-in-javascript-html -> i tried this and it nearly worked but i dont know whats wrong now-> HAD TO CHANGE IT TO HTML AND MY GHOST IMG ID FOR IT TO WORKKKKK, for some reason innerhtml does not work here but outerHTML does
}
function ShowSource()
{
    var svgSourceCode = document.getElementById('box');
    svgSourceCode.textContent="<svg  id= \"ghostieSVG\" width=\"400\" height=\"480\"viewBox=\"0	0	100	120\">"+document.getElementById("ghostieSVG").innerHTML+"</svg>";
    console.log("hello"); //shows the source code in the pink box when the svg/source button is pressed->https://www.w3schools.com/js/js_output.asp, https://www.geeksforgeeks.org/how-to-get-the-entire-html-document-as-a-string-in-javascript/, https://www.petercollingridge.co.uk/tutorials/svg/interactive/javascript/
}

function Hide() //hides all the animation buttons on load-> https://www.w3schools.com/jsref/prop_style_visibility.asp
{
     document.getElementById('c').style.visibility="hidden";
    document.getElementById('s').style.visibility="hidden";
    document.getElementById('d').style.visibility="hidden";
    document.getElementById('sp').style.visibility="hidden";
    document.getElementById('m').style.visibility="hidden";
    document.getElementById('e').style.visibility="hidden";
 
}
function Show() //shows the buttons when animate button is clicked->https://www.w3schools.com/jsref/prop_style_visibility.asp
{
     document.getElementById('c').style.visibility="visible";
    document.getElementById('s').style.visibility="visible";
    document.getElementById('d').style.visibility="visible";
    document.getElementById('sp').style.visibility="visible";
    document.getElementById('m').style.visibility="visible";
    document.getElementById('e').style.visibility="visible";
}

  