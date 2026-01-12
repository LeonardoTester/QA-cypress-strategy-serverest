import registerVisit from "../pagesObjects/VisitRegisterPage.js"
import userRegistration from "../pagesObjects/RegistrationPage.js"
import { userData } from '../../fixtures/userData.js'

const { userFail } = userData
const visitFeature = new registerVisit()
const registrationFeature = new userRegistration()

describe('Register Test', () => {
  // MANUAL TEST: Change the values in the 'userFail' object within the fixtures (userData.js) to test manually
  it(' Register - Fail (Manual interaction )', () => {

      const user = userData.userFail

      visitFeature.visitRegister()
      visitFeature.infoSection()
      registrationFeature.registrationFill(user.username, user.useremail, user.password)
      registrationFeature.registrationClick()
      registrationFeature.registrationCheckUsed()
      
  })

   // AUTOMATED VALIDATION: Run this to validate mandatory field messages automatically
   it.skip('Register - Fail (Empty fields validation )', () => {

      const user = userData.userFail

      visitFeature.visitRegister()
      visitFeature.infoSection()
      registrationFeature.registrationFill(user.username, user.useremail, user.password)
      registrationFeature.registrationClick()
      registrationFeature.registrationCheckMessages(['Nome é obrigatório', 'Email é obrigatório','Password é obrigatório']) 
           
  })
})
