num = int(input('Digite um número (somente até 9999): '))

u = num // 1 % 10
d = num // 10 % 10
c = num // 100 % 10
m = num // 1000 % 10

print('A unidade do número digitado é: {}'.format (u))
print ('Sua dezena é: {}'.format(d))
print ('A centena: {}'.format (c))
print ('E seu milhar... {}'.format (m))