import registerVisit from "../pagesObjects/VisitRegisterPage.js"
import userRegistration from "../pagesObjects/RegistrationPage.js"
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
      registrationFeature.registrationCheckMessages(['Nome é obrigatório', 'Email é obrigatório','Password é obrigatório']) 
           
  })
})
