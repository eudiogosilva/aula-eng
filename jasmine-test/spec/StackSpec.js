describe("Uma pilha", function(){
    let pilha;
    it("pode ser criada", function(){
        pilha = new Stack();
        expect(pilha).toBeDefined();
    });
    describe("vazia", function(){
        beforeEach(function(){
            pilha = new Stack();
        });
        it("tem tamanho zero", function(){
            expect(pilha.size).toEqual(0);
        });
        it("está vazia", function(){
            expect(pilha.isEmpty()).toBe(true);
        });
        it("pode receber um item", function(){
            expect(pilha.push("item")).nothing();
        });
        it("não pode retirar um item", function(){
            expect(pilha.pop()).not.toBeDefined();
        });
        it("pode ser convertida em string vazia", function(){
            expect(pilha.print()).toEqual("");
        });
    })
    describe("depois de colocar um item", function(){
        beforeEach(function(){
            pilha = new Stack();
            pilha.push("item");
        });
        it("não está mais vazia", function(){
            expect(pilha.isEmpty()).toBe(false)
        });
        it("tem tamanho um", function(){
            expect(pilha.size).toEqual(1);
        });
    })
})