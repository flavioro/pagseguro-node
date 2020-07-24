/**
 * sender
 */
const sender = {
  name: "Willy Chagas",
  email: "c46537309654892146172@sandbox.pagseguro.com.br",
  phone: {
    areaCode: "48",
    number: "91510980"
  },
  document: {
    type: "CPF",
    value: "18974411008"
  }
};

/**
 * items
 */
const items = [
  {
    id: 1,
    description: "Produto 1",
    quantity: 2,
    amount: 2
  },
  {
    id: 2,
    description: "Produto 2",
    quantity: 1,
    amount: 60.0
  },
  {
    id: 3,
    description: "Produto 3",
    quantity: 2,
    amount: 20.0
  }
];


/**
 * exports
 */
module.exports = {
	method: "BOLETO",
	extraAmount: 10.0,
	reference: "test_pagseguro_nodejs",
	sender,
	items
};
