var rangeslider = document.getElementById("sliderRange");
var rangeslider_output = document.getElementById("rotacion");

var posxslider = document.getElementById("sliderposx");
var posxslider_output = document.getElementById("posx");

var posyslider = document.getElementById("sliderposy");
var posyslider_output = document.getElementById("posy");

var trxslider = document.getElementById("slidertrx");
var trxslider_output = document.getElementById("trx");

var tryslider = document.getElementById("slidertry");
var tryslider_output = document.getElementById("try");

function init() {
  document.getElementById("name").innerHTML = '<h1>Playground de Amador Caballero</h1>';
  // Inicio cubo.
  shape.style.transform = `rotate(0deg)`;
  bloque.style.top = `22%`;
  bloque.style.left = `38%`;
  shape.style.transform = `translate(${window.valuex}%, ${window.valuey}%)`;  
  // Inicio Texto HTML al lado de sliders.
  rangeslider_output.innerHTML = '0 deg';
  posxslider_output.innerHTML = '22%';
  posyslider_output.innerHTML = '38%';
  trxslider_output.innerHTML = '0%';
  tryslider_output.innerHTML = '0%';
  // Inicio sliders.
  rangeslider.value = 0;
  trxslider.value = 0;
  tryslider.value = 0;
  window.valuex = 0;
  window.valuey = 0;
  window.rotation = 0;
}

var bloque = document.getElementById("bloque_container");
var shape = document.getElementById("shape");
var rot_anchor = document.getElementById("rotation_anchor");
var other_anchor = document.getElementById("other_anchor");

rangeslider.oninput = function range() {
  rangeslider_output.innerHTML = this.value + " deg";
  shape.style.transform = `translate(${window.valuex}%, ${window.valuey}%) rotate(${this.value}deg)`;
  window.rotation = this.value;
}

posxslider.oninput = function posx() {
  posxslider_output.innerHTML = this.value + "%";
  bloque.style.top = `${this.value}%`;
}

posyslider.oninput = function posy() {
  posyslider_output.innerHTML = this.value + "%";
  bloque.style.left = `${this.value}%`;
}

trxslider.oninput = function trx() {
  trxslider_output.innerHTML = this.value + "%";
  shape.style.transform = `translate(${this.value}%, ${window.valuey}%) rotate(${window.rotation}deg)` ;
  window.valuex = this.value;
}

tryslider.oninput = function ty() {
  tryslider_output.innerHTML = this.value + "%";
  shape.style.transform = `translate(${window.valuex}%, ${this.value}%) rotate(${window.rotation}deg)` ;
  window.valuey = this.value;
}

function check() {
  // Get the checkbox
  var checkBox = document.getElementById("myCheck");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    rot_anchor.style.visibility = 'visible';
    other_anchor.style.visibility = 'visible';
  } else {
    rot_anchor.style.visibility = 'hidden';
    other_anchor.style.visibility = 'hidden';
  }
} 