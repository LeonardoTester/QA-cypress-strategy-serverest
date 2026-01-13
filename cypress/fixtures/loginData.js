export const loginData = {
  userSuccess: {
    useremail: "leonardonsser@gmail.com",
    password: "vasco123"
  },

  userFail: {
   // Gera email e senha aleatória 
    useremail: `teste${Date.now()}@email.com`,
    password: `User_${Math.floor(Math.random() * 10000)}`
  }
}