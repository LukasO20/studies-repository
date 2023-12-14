# Análise de dados em uma Tupla
print('\33[1;34mDados em uma Tupla \33[1;33m0.0')
numeros = (int(input('Digite um número: ')),
           int(input('Digite o segundo número: ')),
           int(input('O terceiro número... ')),
           int(input('O último número: ')))
print(f'Foram digitados os números {numeros}')
print(f'O número 9 aparece {numeros.count(9)} vezes :)')
if 3 in numeros:
    print(f'O número 3 aparece na {numeros.index(3)+1}° posição!')
else:
    print('O valor 3 não foi encontrado em uma das posições')
print('Você digitou os seguintes valores pares ', end= '')
for par in numeros:
    if par % 2 == 0:
        print(f'{par}', end=' ')