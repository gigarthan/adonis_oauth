'use strict'

const SCOPES = ['https://www.googleapis.com/auth/drive.appfolder'];
const TOKEN_PATH = 'token.json';

class AuthController {
    async redirect({ally}) {
        await ally.driver('google').scope(['profile', 'email','https://www.googleapis.com/auth/drive']).redirect()
    }

    async handleCallback({params, ally, auth, response, session}) {
        const provider = 'google'
        try {
            const userData = await ally.driver(provider).getUser();
            session.put('user', userData.getName())
            session.put('accessToken', userData.getAccessToken())
            response.redirect('/')
        } catch (error) {
            console.log(error);
        }
    }

    async logout({response, session}) {
        session.clear();
        response.redirect('/')
    }


}

module.exports = AuthController
