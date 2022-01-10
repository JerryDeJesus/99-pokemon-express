const express = require("express");
const app = express();
const pokemon = require("./models/pokemon.json");

app.get("/", (req, res)=>{
    res.send('Welcome 99 Pokemon')
})

app.get("/bugs", (req, res)=>{
    res.send('<h1>99 little bugs in the code</h1><a href="http://localhost:8888/bugs/101">pull one down, patch it around</a>')
})

app.get("/bugs/:numberOfBugs", (req, res)=>{
    const { numberOfBugs } = req.params;
    if(numberOfBugs < 200){
        res.send(`<h1>${numberOfBugs} little bugs in the code</h1><a href="http://localhost:8888/bugs/${Number(numberOfBugs) + 2}">Pull one down, patch it around</a>`)
    }else{
        res.send('Too many bugs!! Start over!')
        }
})

app.get("/pokemon", (req, res)=>{
    res.send(pokemon)
})

app.get("/pokemon/search", (req, res)=>{
    const foundMon = pokemon.find((poke)=>{
        return poke.name.toLowerCase() === req.query.name.toLowerCase()
    })
    if(foundMon){
        res.send([foundMon])
    }
    res.send([]);
})

app.get("/pokemon/:index", (req, res)=>{
    const { index } = req.params;
    if(pokemon[index]){
        res.send(pokemon[index])
    }else{
        res.send(`Sorry, no pokemon found at ${index}`)
    }
})

app.get("/:verb/:adjective/:noun", (req, res)=>{
    const { verb, adjective, noun } = req.params;
    const message = `${verb}-${adjective}-${noun}`;
    res.send(`Congratulations on starting a new project called ${message}!`);
})



module.exports = app