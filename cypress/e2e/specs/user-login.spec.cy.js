import { loginData } from "../../fixtures/loginData.js"
import LoginVisit from "../pagesObjects/LoginPage.js" 
import DashboardPage from "../pagesObjects/dashBoardLogin.js"
import BuyStore from "../pagesObjects/buyProduct.js"

const userLogin = new LoginVisit() 
const dashBoard = new DashboardPage()
const buyUser = new BuyStore()

describe('Login Test', () => { 

  it.skip('User Login - Success', () => {
    
      const userTrue = loginData.userSuccess

      userLogin.visitLogin()
      userLogin.loginWithUser(userTrue.useremail, userTrue.password)
      dashBoard.DashBoardCheck()  
      buyUser.buyList()
      buyUser.DashBoardCard()

  })

  it('User Login - Error', () => {

    const userError = loginData.userFail

      userLogin.visitLogin()
      userLogin.loginWithUser(userError.useremail, userError.password)
      userLogin.alertErrorLogin()
      
  })
})