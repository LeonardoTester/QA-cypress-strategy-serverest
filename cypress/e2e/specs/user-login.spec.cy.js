import LoginVisit from "../pagesObjects/LoginPage.js" 

const userLogin = new LoginVisit() 

describe('Login Test', () => { 

  it('User Login - Success', () => {
      userLogin.visitLogin()
      userLogin.loginWithUser('leonardonsser@gmail.com', 'aspargos100')
      
  })
})