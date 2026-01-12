import registerVisit from "../pagesObjects/VisitRegisterPage"
import userRegistration from "../pagesObjects/RegistrationPage"
import { userData } from '../../fixtures/userData.js'

const { userFail } = userData
const visitFeature = new registerVisit()
const registrationFeature = new userRegistration()

describe('Register Test', () => {

  it(' Register - Fail )', () => {

      const user = userData.userFail

      visitFeature.visitRegister()
      visitFeature.infoSection()
      registrationFeature.registrationFill(user.username, user.useremail, user.password)
      registrationFeature.registrationClick()
      registrationFeature.registrationCheck()

  })

})
