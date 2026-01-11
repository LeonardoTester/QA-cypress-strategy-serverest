import RegisterPage from "./pages/RegisterPage"

const FeautreRegister = new RegisterPage()

describe('Register Test', () => {

  it(' Register - Success )', () => {

      FeautreRegister.VisitRegister()
      FeautreRegister.InfoSection()
   
  })

    it.skip(' Register - Fail )', () => {
    
  })
  
})
