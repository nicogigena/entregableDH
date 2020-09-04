let express = require('express');
const bandas = require("../modules/bandas.js")
let lista = bandas.lista

let bandasController = {
    index: function (req, res){
        let list = lista
        let bandIndex = []
        let bandList = []
        for (let i = 0; i < lista.length; i++) {

            bandList.push(lista[i].nombre);
            bandIndex.push(i)
            
        }

        return res.render("bandas", {bandList: bandList, bandIndex:bandIndex, list:list})
    },
    porId: function (req, res){
        let param = req.params.id;
        let bandNombre;
        let bandIndex;
        for (let i = 0; i < lista.length; i++) {
            if (param == lista[i].id) {
                bandIndex = i
                bandNombre = lista[i].nombre
                break
            }
            
        }
        res.render("bandasId", {param, bandIndex, bandNombre, lista})

    }
}


module.exports = bandasController