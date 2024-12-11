let somaTotal = 0; //acumulador do total da compra
document.getElementById('lista-produtos').innerHTML = ''; //aquele exemplo do inicio da pagina nao conta
document.getElementById('valor-total').textContent= `R$ 0`;

function adicionar(){
    // 1. recuperar valores do formulario (nome do produto + quantidade + valor)
    let produto = document.getElementById('produto').value;
    let stringProduto = produto.split('-')[0];
    let numeroProduto = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;

    // 2. calcular o preço subtotal
    let subtotalPreco = quantidade * numeroProduto;

    // 3. adicionar o produto no carrinho
    let adicionarNoCarrinho = document.getElementById('lista-produtos');
    adicionarNoCarrinho.innerHTML += `
            <section class="carrinho__produtos__produto">
            <span class="texto-azul">${quantidade}x</span> ${stringProduto} <span class="texto-azul">
            R$${numeroProduto}</span>
            </section>`


    // 4. calcular o total da compra e zerar a quantidade no campo
    somaTotal += subtotalPreco;
    let campoSomaTotal = document.getElementById('valor-total');
    campoSomaTotal.textContent = `R$${somaTotal}`
    document.getElementById('quantidade').value = 0;
}

function limpar(){
    //1. zerar os valores no campo "produto" e "quantidade"
    document.getElementById('produto').value = '';
    document.getElementById('quantidade').value = '';

    //2. zerar o acumulador novamente
    let somaTotal = 0;

    //3. Limpar a lista de produtos
    document.getElementById('lista-produtos').innerHTML = '';

    //4. zerar o total da compra
    let campoSomaTotal = document.getElementById('valor-total');
    campoSomaTotal.textContent = `R$${somaTotal}`

}