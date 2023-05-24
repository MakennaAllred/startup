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

let currentData = users;

function table(data){
    if(!!data && data.length >1) {
        currentData = data;
        const headers = parseHeader(data);
        const tableElement = generateTable(headers, data);
        const output = document.getElementById("output");
        removeAllChildNodes(output);
        output.appendChild(tableElement);}
        else{
            outputData("invalid input", data)
        }
    }



