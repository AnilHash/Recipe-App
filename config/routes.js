const express = require('express')

const router = express.Router()

const UsersController = require('../app/controllers/UsersController')
const RecipesController = require('../app/controllers/RecipesController')
const authenticateUser = require('../app/middleware/authentication')

router.post('/users/register',UsersController.register)
router.post('/users/login',UsersController.login)
router.get('/users/account',authenticateUser,UsersController.account)
router.delete('/users/logout',authenticateUser,UsersController.logout)

router.get('/recipes',RecipesController.list)
router.post('/recipes',authenticateUser,RecipesController.create)
router.put('/recipes/:id',authenticateUser,RecipesController.update)
router.delete('/recipes/:id',authenticateUser,RecipesController.destroy)

module.exports = router