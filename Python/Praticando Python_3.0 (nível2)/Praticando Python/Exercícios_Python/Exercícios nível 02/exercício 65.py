# Maior e Menor
print('Somando e realizando a média de valores')
comando = 'S'
quantidade = soma = maior = menor = 0
while comando in 'Ss':
    num = int(input('Digite um número: '))
    soma += num
    quantidade += 1
    if quantidade == 1:
        maior = menor = num
    else:
        if num > maior:
            maior = num
        if num < menor:
            menor = num
    comando = str(input('Deseja adicionar mais um número? [S/N]: ')).strip().upper()
media = soma / quantidade
print('Você somou {} valores e a média entre eles é {:.2f}'.format(quantidade,media))
print('Dentre todos esses valores o menor foi {} e o maior {}.'.format(menor,maior))
print('Obrigado :)')