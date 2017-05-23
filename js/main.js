var cancha = document.getElementsByClassName("cancha")[0];
var linea = document.getElementsByClassName("linea")[0];
var arcoUno = document.getElementsByClassName("arco-uno")[0];
var arcoDos = document.getElementsByClassName("arco-dos")[0];
var circulo = document.getElementsByClassName("circulo")[0];
var laPelota = document.getElementsByClassName("pelota")[0];
var pelotaUno = document.getElementsByClassName("uno")[0];
var pelotaDos = document.getElementsByClassName("dos")[0];
var pelotaTres = document.getElementsByClassName("tres")[0];

cancha.style.position = "relative";
cancha.style.background = "#78A167";
cancha.style.width = "900px";
cancha.style.height = "500px";
cancha.style.top = "10px";
cancha.style.left = "10px";

linea.style.position = "absolute";
linea.style.width = "850px";
linea.style.height = "450px";
linea.style.border = "2px solid #FFFFFF";
linea.style.top = "25px";
linea.style.left = "25px";

arcoUno.style.position = "absolute";
arcoUno.style.width = "130px";
arcoUno.style.height = "250px";
arcoUno.style.border = "2px solid #FFFFFF";
arcoUno.style.top = "85px";
arcoUno.style.left = "-0.1em";

arcoDos.style.position = "absolute";
arcoDos.style.width = "130px";
arcoDos.style.height = "250px";
arcoDos.style.border = "2px solid #FFFFFF";
arcoDos.style.top = "85px";
arcoDos.style.right = "-0.1em";

circulo.style.position = "absolute";
circulo.style.width = "150px";
circulo.style.height = "150px";
circulo.style.border = "2px solid #FFFFFF";
circulo.style.borderRadius = "50%";
circulo.style.top = "120px";
circulo.style.right = "325px";

pelotaUno.style.backgroundImage = "url('img/bola.png')";
pelotaUno.style.position = "absolute";
pelotaUno.style.width = "24px";
pelotaUno.style.height = "24px";
pelotaUno.style.top = "84px";
pelotaUno.style.left = "122px";

pelotaDos.style.backgroundImage = "url('img/bola.png')";
pelotaDos.style.position = "absolute";
pelotaDos.style.width = "24px";
pelotaDos.style.height = "24px";
pelotaDos.style.top = "50px";
pelotaDos.style.left = "380px";

pelotaTres.style.backgroundImage = "url('img/bola.png')";
pelotaTres.style.position = "absolute";
pelotaTres.style.width = "24px";
pelotaTres.style.height = "24px";
pelotaTres.style.bottom = "112px";
pelotaTres.style.right = "135px";