# Sequência de Fibonacci v1.0
print('Sequência de Fibonacci v1,0')
n = int(input('Quantos termos você deseja exibir? '))
fb1 = 0
fb2 = 1
print('_'*50)
print('{}...{}...'.format(fb1,fb2), end='')
contador = 3
while contador <= n:
    fb3 = fb1 + fb2
    contador += 1
    fb1 = fb2
    fb2 = fb3
    print('{}...'.format(fb3), end='')
print('''
Acabou a Sequência de Fibonacci :)''')
print('_'*50)