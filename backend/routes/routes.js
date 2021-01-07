const { response, json } = require('express')
const express = require('express')
const router = express.Router()
const login = require('../modules/schema')

router.route('/login').post((request, response) => {
    const loginUser = new login({
        name: request.body.name,
        username: request.body.username,
        password: request.body.password,
        email: request.body.email
    })
    loginUser.save()
        .then(data => {
            response.json(data)
        })
        .catch(error => {
            response.json(error)

        })

})

router.route('/login').get((res, req) => {
    login.find()
        .then(notes => res.json(notes))
})


module.exports = router