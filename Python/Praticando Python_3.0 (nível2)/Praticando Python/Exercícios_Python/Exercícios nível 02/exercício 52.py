# Número PRIMO
print('Vamos conferir os números primos?')
num = int(input('Digite um número inteiro: '))
tot = 0
for primo in range(1, num + 1):
    if num % primo == 0:
        print('"{}"'.format(primo), end=' ')
        tot += 1
    else:
        print('{}'.format(primo), end=' ')
print('O número {} foi divisível {} vezes'.format(num,tot))
if tot == 2:
    print('Logo ele é um número PRIMO :D')
else:
    print('Então ele NÃO É um número PRIMO')