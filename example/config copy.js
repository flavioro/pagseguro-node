module.exports = {
//   email: "", // email da conta do pagseguro
//   token: "", // token pagseguro
//   appId: "", // ID da aplicação (pagamento recorrente)
//   appKey: "", // Key da aplicação (pagemento recorrente)

  email : "financeiro@archshop.com.br",
  token: "914C9DB3D10F4395B55EDDE7FECA3A79",
  appId: "app9513284614",
  appKey: "3514BF1BEFEFA31334C6DFA55BDAF9D0",

  env: "sandbox",
  log: __dirname + "/log/pagseguro.log",
  debug: false,
  notificationURL: "http://localhost:3333/authorization/notification",
  redirectURL: "http://localhost:3333/authorization/response"
};
