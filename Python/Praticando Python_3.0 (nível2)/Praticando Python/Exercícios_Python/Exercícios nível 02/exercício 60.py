# Cálculo do Fatorial
print('--- Fatorial de um Número ---')
num = int(input('Digite o número: '))
factorial = num
f = 1
print('Calculando {}! = '.format(num), end='')
while factorial > 0:
    print('{}'.format(factorial), end='')
    print(' x ' if factorial > 1 else ' = ', end='')
    f *= factorial
    factorial -= 1
print('{}'.format(f))