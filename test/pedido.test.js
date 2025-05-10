const assert = require('assert')
const Pedido = require('../pedido')

describe("Sistema de Pedidos", () => {
    let pedido;

    this.BeforeEach(() => {
        pedido = new Pedido()
    })

    it("adicionar itens ao pedido", () => {
        pedido.adicionarItem("Hamburguer", 10.5, 2)
        pedido.adicionarItem("Batata frita", 5.0, 1)
        assert.strictEqualEqual(pedido.itens.length, 2)
    })

    it("Deve calcular o total do pedido corretamente", () => {
        pedido.adicionarItem("Hamburguer", 10.5, 2)
        pedido.adicionarItem("Batata frita", 5.0, 1)
        const total = pedido.calcularTotal()
        assert.strictEqual(total, 31.0)
    })
    it("Deve aplicar desconto total ao pedido", () => {
        pedido.adicionarItem("Hamburguer", 10.5, 2)
        pedido.adicionarItem("Batata frita", 5.0, 1)
        pedido.aplicarDesconto("promo10")
        const totalComDesconto = pedido.CalcularTotal()
        assert.strictEqual(total, 21.0)
    })
    

})