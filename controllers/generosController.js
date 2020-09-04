let express = require('express');
const bandas = require("../modules/bandas.js")
let lista = bandas.lista

let generosController = {
    index: function (req, res){
        let list = lista
        let generosList = []
        for (let i = 0; i < lista.length; i++) {
            if (generosList.indexOf(lista[i].genero)==-1) {
                generosList.push(lista[i].genero)
                }            
        }

        return res.render("generos", {list:list, generosList})
    },
    porId: function (req, res){
        let param = req.params.genId

        let bandList = [];
        let bandIndex = [];
        for (let i = 0; i < lista.length; i++) {
            if (param == lista[i].genero) {
                bandIndex.push(i)
                bandList.push(lista[i].nombre)
            }
            
        }

        res.render("generosId", {list:lista, bandList, bandIndex})


    }
}

module.exports = generosController