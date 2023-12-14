# Estatísticas em Produtos
gasto = mil = qnt = menor = 0
barato = ''
while True:
    produto = str(input('Digite o nome do produto: ')).strip()
    preçoduto = float(input('Digite aqui o preço do produto escolhido: R$'))
    gasto += preçoduto
    qnt += 1
    if preçoduto > 1000:
       mil += 1
    if qnt == 1 or preçoduto < menor:
        menor = preçoduto
        barato = produto
    continuar = ' '
    while continuar not in 'SN':
        continuar = str(input('Deseja Adicionar mais produtos? Sim [ S ] Não [N]: ')).strip().upper()[0]
    if continuar == 'N':
        break
print(f'O valor total das compras foi de\33[1;34m R${gasto:.2f}')
print(f'Existem {mil} produtos acima de\33[1;344m R$1000,00')
print(f'O produto de menor preço foi o(a)\33[1;32m {barato} por \33[1;34mR${menor:.2f}')
print('\33[1;33m------Obrigado por Visitar nossa Loja------ :)')
