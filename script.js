let btn_l = document.querySelector("#btn_l");
let btn_ma = document.querySelector("#btn_ma");
let btn_mi = document.querySelector("#btn_mi");
let btn_j = document.querySelector("#btn_j");
let btn_v = document.querySelector("#btn_v");

let art = document.querySelector("#show_article");

lunes = {
    titulo: "Begin; ",
    parrafo: "La clase del dia lunes empezo normal, lo de siempre... Explicacion y resolver ejercicios pero no estabamos preparados para lo que iba a ocurrir al final de la clase...",
    parrafo2: "Un video misterioso con un personajes iguales de misteriosos requerian de nuestras cpacidades para resolver problemas y ayudarlos. El mensaje era de un tal Kurt quien queria acabar con los planes de Ale Rav, Kurt tenia miedo de lo que Ale Rav era capaz de hacer. Nos podio ingresar a un servidor de base de datos para poder ayudarlo desde ahi, con datos que ya conociamos porqur el tenia; con suerte, accesp acceso al Moodle. Nustra primera tarea consistia en realizar la compribacion de DUI a traves de una funcion que nos permitiera hacerlo...NO fue facil den hacer pero al final y despues de un par de horas de esfuerzo logre resolverlo, el cual me dio una pista para el siguiente movimiento... ",
    img: "lunes.png",
}
martes = {
    titulo: "o-o-o:",
    parrafo: "Asi es, terminé...Hice todo lo que kurt pidio y eso me llevo a otro paso, mas complicado que el anterior el cual sinceramente, no crei seria capaz de terminar.",
    parrafo2: "Kurt tenia nueva informacion, MUY IMPORTANTE que queria que supiera. Ale Rav habia puesto un par de bombas en las bases de la universidad ademas que Ada, amiga de Kurt habia desaparecido. El solo encontro su laptop destrozada, mas tarde ella le respondio su mensaje diciendo que debia buscar algo en el polideportivo. Y pues eso hice, me dirigi al poli en busca de pistas...Y la encontre, estaba escondida no fue facil pero igual que ña anterior guardaba un mensaje...",
    img: "martes.png",
}
miercoles = {
    titulo: "minus monocromo:",
    parrafo: "El tercero vino acompañado de un audio que me ayudaria esta vez... O eso crei. Kurt esta raro, un poco melancolico pero me imagino que esto esta cerca de acabar",
    parrafo2: "Kurt revelo que era muy amigo de Ale, pero tya mo lo reconocia,en realidad la propuesta de destruir la universidad y darnos nuestros titulos era muy tentadora. Pero yo no me iba a vender yo sabia lo que costaba y esta dispuesto a ganarmelo pero tambien queria ayudar a Kurt. Pero ahora el nuevo reto era muchisimo mas complicado que el anterior, sinceramente al principio no me sentia capaz de poderlo hacer pero uniendo fuerzas con otras personas que queriamos ayudar a Kurt lo realizamos. Pero mientras mas le ayudaba el se sentia mas presionado por Ale, ademas me dio la buena noticia de que ada habia descuebierto un codigo para evitar que las bombas explotaran y que ella estaba a punto de tomar un vuelo...",
    img: "miercoles.png",
}
jueves = {
    titulo: "cumulonimbus:",
    parrafo: "El siguiente mensaje de Kurt me preocupo, ya no confiaba en nadie y eso que yo lo habia ayudado en todo lo que pude pero al parecer no fue suficiente. Pero sabia que el o Ale ganarian y en su decision de ganar estaba dispuesto a revelar la identidad de su enemigo...Pero antes debia cumplir una mision para demostrar que si estaba de su lado.",
    parrafo2: "Obviamente lo logre, y me conto que ale ya sabia de todo lo que habia pasado y este estaba asustado de no lograr sus planes y que habia huido...Lo mejor fue que me cito en un lugar para porfin conocer la identidad de Ale porque ya no tenia miedo a una represalia.",
    img: "jueves.png",
}
viernes = {
    titulo: "commit;",
    parrafo: "Pase toda la noche imaginando quien podia ser Ale, tenia algunas sospechas pero no queria acusar a alguien sin saber, aunque debo admitir que tambien estaba preocupado por si Ale se enteraba y quisiera vengarse...",
    parrafo2: "Esto se suponia que tendria un final feliz pero no fue asi...Al llegar al lugar ahi estaba, Kurt. Era la primera vez que lo veia, se le notaba que estaba nervioso, asustado pero aun asi se atrevio a hablar, pero como dije no tuvo un final feliz...Algo paso, de repente cuando estaba a punto de revelar la identidad se desplomo, pero al menos pude ver la verdadera identidad de Ale, no era ni de cerca la persona que imaginaba, lo veia como alguien agradable y amigable pero por mi propia seguridad no dire quien es...Lo mas triste de todo es que Kurt no podra reunirse con Ada, no tengo manera de contactarla pero espero este bien",
    img: "viernes.png",
}

articles = [];

articles = [lunes, martes, miercoles, jueves, viernes];


let change_art = (x) => {
    console.log(articles[x])
    let new_art = document.createElement("article");
    new_art.className = "articles_";
    new_art.innerHTML =
        `
        <h2>${articles[x].titulo}</h2>
        <br>
        <p>${articles[x].parrafo}</p>
        <br>
        <p>${articles[x].parrafo2}</p>
        <br>
        <img src="${articles[x].img}" alt="img">
        `
        art.innerHTML=" ";
    art.appendChild(new_art);

}

btn_l.addEventListener('click', function () {
    change_art(0)
});

btn_ma.addEventListener('click', function () {
    change_art(1)
});

btn_mi.addEventListener('click', function () {
    change_art(2)
});

btn_j.addEventListener('click', function () {
    change_art(3)
});

btn_v.addEventListener('click', function () {
    change_art(4)
});