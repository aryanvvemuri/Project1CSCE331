var num = 0; // global variable

function button1() {
    num++;
    document.getElementById("output").innerHTML = "Press x " + num;
}

function toggleStyleSheet(){
    // Task 1
    // Steps
    // 1 (a) Get style element by ID (hint: getElementById)
    // getElementById("mainStyleSheet");
    
    // 1 (b) Check the current stylesheet file name. (hint: element.getAttribute)
//    element.getAttribute("href");
   
    // 1 (c) Determine new stylesheet file name
   if (document.getElementById("styleSheet").getAttribute("href") == "index.css"){
        document.querySelectorAll(".styleSheet_nav").forEach(nav => nav.setAttribute("href", "navbar_2.css"));
        document.getElementById("styleSheet").setAttribute("href", "index_2.css");
    //    document.getElementById("styleSheet").setAttribute("href", "index_2.css");


   } else {
       document.getElementById("styleSheet").setAttribute("href", "index.css");
       document.querySelectorAll(".styleSheet_nav").forEach(nav => nav.setAttribute("href", "navbar.css"));

   }
   

    // 1 (d) replace stylesheet with new stylesheet (hint: element.setAttribute)



    // TASK 2
    // 2 (d) For persistence when page is refreshed. save new stylesheet name to localStorage
    // hint: localStorage.setItem(name, value)
    localStorage.setItem("styleSheet", document.getElementById("styleSheet").getAttribute("href"));
    localStorage.setItem("styleSheet_nav", document.getElementById("styleSheet_nav").getAttribute("href"));

  
}


window.onload = function(){
    // TASK 2
    // TODO: Make the last div color persist even when someone refreshes the page.
    // var lastload=
    // Steps
    // 2 (a) get stylesheet name from local storage hint: localStorage.getItem(name)
    let lastload=localStorage.getItem("styleSheet");
    let lastload_nav=localStorage.getItem("styleSheet_nav");

    // 2 (b) get html style element by ID
    let load= document.getElementById("styleSheet");
    let load_nav= document.getElementById("styleSheet_nav");
    

    // 2 (c) replace href attribute of html element.
    load.setAttribute("href", lastload);
    document.querySelectorAll(".styleSheet_nav").forEach(nav => nav.setAttribute("href", lastload_nav));

}


