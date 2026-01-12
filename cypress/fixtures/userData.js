export const userData = {
  userSuccess: {
    // Gera um nome aleatório com um número baseado no horário atual
    username: `User_${Math.floor(Math.random() * 10000)}`,
    // Gera um email único para evitar o erro de "Email já usado"
    useremail: `teste${Date.now()}@email.com`,
    password: "admin123"
  },

  userFail: {
    username: "leonadwadrdsefsfso",
    useremail: "leodwdwafsefsfdnardo@gmail.com",
    password: "vafsefssc999"
  }
}