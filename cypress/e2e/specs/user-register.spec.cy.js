import registerVisit from "../pagesObject/VisitRegisterPage"
import userRegistration from "../pagesObject/RegistrationPage"

const visitFeature = new registerVisit()
const registrationFeature = new userRegistration()

describe('Register Test', () => {

  it(' Register - Success )', () => {

      visitFeature.visitRegister()
      visitFeature.infoSection()
      registrationFeature.registrationFill("Leonardo", "leooddo@gmail.com", "seeenha234")
      registrationFeature.registrationClick()
      registrationFeature.registrationCheck()

  })

    it.skip(' Register - Fail )', () => {
    
      visitFeature.visitRegister()
      visitFeature.infoSection()

  })
  
})
