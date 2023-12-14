#Empréstimo bancário
casa = float(input('Qual é o valor da casa?: R$'))
tempo = int(input('Em quantos anos pretende quitar?: '))
salario = float(input('Qual o valor salarial que recebe mensalmente?: R$'))
mensalidade = (tempo*12) / casa
condicao = salario * 30 / 100
if mensalidade <= condicao:
    print('Permissão condedida! você pagará uma casa de R${:.2f} em {} anos'.format (casa,tempo))
    print('Sua prestação é R${:.2f} mensais.'.format(mensalidade))
else:
    print('Negado ! Infelizmente sua atual condição financeira não permite o empréstimo :/.')
    