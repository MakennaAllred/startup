"use strict";

let users = [
   {name: "Genny"}, 
   {name:"Chandler"},
   {name: "Holly"}
]

const events = [
    {name:"Genny", title: "dinner"},
    {name:"Genny", title:"work meeting"},
    {name:"Holly", title:"lunch with Mak"},
    {name:"Chandler", title:"visit math TA"},
    {name:"Chandler", title:"pick up Cricket from park"}
]

addEventListener("load", (event) => {function buildAccordianList(data) {
    let root = document.getElementById('root')
    for (i =0, i < users.length; i++;){
        let el = document.createElement('div')
        el.innerText = users[i];
        root.appendChild(el)
    }

}});

