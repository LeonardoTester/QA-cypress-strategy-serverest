import registerVisit from "../pagesObjects/VisitRegisterPage"
import userRegistration from "../pagesObjects/RegistrationPage"
import { userData } from '../../fixtures/userData.js'

const { userSuccess, userFail } = userData

const visitFeature = new registerVisit()
const registrationFeature = new userRegistration()

describe('Register Test', () => {

  it(' Register - Success )', () => {

      const user = userData.userSuccess

      visitFeature.visitRegister()
      visitFeature.infoSection()
      registrationFeature.registrationFill(user.username, user.useremail, user.password)
      registrationFeature.registrationClick()
      registrationFeature.registrationCheck()

  })

    it.skip(' Register - Fail )', () => {
    
      visitFeature.visitRegister()
      visitFeature.infoSection()

  })
  
})
