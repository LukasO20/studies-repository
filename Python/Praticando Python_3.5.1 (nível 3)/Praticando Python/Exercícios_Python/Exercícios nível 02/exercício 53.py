# Detector de Palíndromo
print('PALÍNDROMO')
frase = str(input('Digite um frase: ')).strip().upper()
palavra = frase.split()
junt = ''.join(palavra)
inverso = ''
for letra in range(len(junt)- 1, - 1, - 1):
    inverso += junt[letra]
if inverso == junt:
    print('Essa frase/palavra {} é um Palíndromo :)'.format(junt))
    print('Em Palíndromo ficará {}'.format(inverso))
else:
    print('Essa frase/palavra não é um Palíndromo')