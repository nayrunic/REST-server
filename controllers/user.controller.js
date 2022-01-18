const { response } = require('express');

const userGet = (req, res = response) => {

    const { apikey, nombre, q} = req.query;

    res.json({
        msg: "api get -- controller",
        q,
        apikey,
        nombre
    });
}

const userPost = (req, res = response) => {

    const {nombre} = req.body;

    res.json({
        msg: "api post",
        nombre
    });
}

const userPut = (req, res = response) => {

    const id = req.params.id;

    res.json({
        msg: "api put",
        id
    });
}

const userDelete = (req, res = response) => {
    res.json({
        msg: "api delete"
    });
}

module.exports = {
    userGet,
    userPost,
    userPut,
    userDelete
}