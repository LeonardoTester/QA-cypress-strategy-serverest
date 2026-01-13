import LoginVisit from "../pagesObjects/LoginPage.js" 
import DashboardPage from "../pagesObjects/dashBoardLogin.js"

const userLogin = new LoginVisit() 
const dashBoard = new DashboardPage()

describe('Login Test', () => { 

  it('User Login - Success', () => {

      userLogin.visitLogin()
      userLogin.loginWithUser('leonardonsser@gmail.com', 'aspargos100')
      dashBoard.DashBoardCheck()  
      
  })

  it.skip('User Login - Error', () => {
      userLogin.visitLogin()
      userLogin.loginWithUser('leonardonsser@gmail.com', 'aspargos100')
      
  })
})