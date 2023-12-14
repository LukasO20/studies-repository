#Gerenciador de Pagamentos
print('---- POWERFULL PRICES ----')
produto = float(input('Digite o valor do produto: R$'))
print('''Agora escolha uma das opções abaixo
[ 1 ] - À Vista dinheiro/cheque, você tem 10% de desconto.
[ 2 ] - À Vista no cartão: 5% de desconto.
[ 3 ] - 2x no Cartão: preço formal.
[ 4 ] - 3x ou mais no cartão: 20% de Juros.''')
escolha = input('Opção escolhida... ')
if escolha == '1':
    valorf = produto - (produto/100 * 10)
    print('Você escolheu a primeira opção (10% de desconto). Sua compra foi de R${:.2f}'.format(valorf))
elif escolha == '2':
    valorf = produto - (produto/100 * 5)
    print('Você escolheu a segunda opção (5% de desconto). Sua compra foi de R${:.2f}'.format(valorf))
elif escolha == '3':
    parcela = (produto/2)
    print('Você escolheu a terceira opção com parcelas de 2x por R${:.2F}. Seu produto custará R${:.2f}'.format(parcela, produto))
elif escolha == '4':
    valorf = produto + (produto/100 * 20)
    parcela = int(input('Quantas parcelas? '))
    parcelado = valorf / parcela
    print('''Você escolheu a quarta opção (20% de juros). Sua parcela de {}x por R${:.2F}
O valor do produto é R${:.2f} '''.format(parcela, parcelado, valorf))
elif escolha != 1 and 2 and 3 or 4:
    print('OPÇÃO INVÁLIDA, tente novamente!')