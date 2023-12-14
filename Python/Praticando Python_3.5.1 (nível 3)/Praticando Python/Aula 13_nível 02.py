#Estruturas de repetição "FOR"
soma = 0 # O "soma" significa que será um operador para trabalhar junto com o "n"
for numero in range(0,4):
    n = int(input('Digite um número, vamos somar: '))
    soma = soma + n # O "soma" vale 0, logo ele será somado e repetido com o "n"
print('A soma dos valores é {}'.format(soma))
print('Acabou a soma :)') 