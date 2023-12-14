import math

print ('Vamos conferir a hipotenusa de um triângulo ? ')

oposto = float(input('Digite um valor para ser o cateto oposto do nosso triângulo: '))
adjacente = float(input('Esse é o adjacente, digite um valor para ele: '))

hi = (oposto**2 + adjacente**2) ** (1/2)

print('A hipotenusa desse triângulo é {}'.format (math.trunc(hi)))

