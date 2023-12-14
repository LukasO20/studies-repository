numero = int(input('Digite um número, vamos ver se ele é impar ou par: '))
resultado = numero % 2
if resultado == 0:
    print('O número {} é PAR'.format(numero))
else:
    print('O número {} é IMPAR'.format(numero))