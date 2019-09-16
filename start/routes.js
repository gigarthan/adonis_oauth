'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', ({session, response, view}) => {
    const user = session.get('user')
    return view.render('welcome', {user, test: 'dasdas'})
}).as('home')
Route.get('/auth/google', 'AuthController.redirect').as('social.login')
Route.get('/authenticated/google', 'Authcontroller.handleCallback').as('social.login.callback')
Route.get('/logout', 'AuthController.logout').as('logout')
Route.get('/files', 'FileController.listFiles')
Route.post('/files', 'FileController.upload')