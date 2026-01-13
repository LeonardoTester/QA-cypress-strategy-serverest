export const loginData = {
  userSuccess: {
    useremail: "emotion@gmail.com",
    password: "aspargos100"
  },

  userFail: {
   // Gera email e senha aleatória 
    useremail: `teste${Date.now()}@email.com`,
    password: `User_${Math.floor(Math.random() * 10000)}`
  }
}