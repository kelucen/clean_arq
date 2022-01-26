import OrderItem from "../src/Project/OrderItem"

test("Deve criar um item do pedido", function(){
    const ordemItem = new OrderItem(1, 1000, 10);
    expect(ordemItem.getTotal()).toBe(10000);
})