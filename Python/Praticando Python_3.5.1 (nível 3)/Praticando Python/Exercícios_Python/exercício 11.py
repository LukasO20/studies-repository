from re import A


print ('Vamos conferir a base e a altura de uma parede O.O')
base = float(input('Primeiro, digite a base em metros: '))
altura = float(input('Vamos para a alura, digite ela aqui: '))

a = base*altura
l = a / 2

print('A área total dessa parede é {} m²' .format(a))
print('O tanto de litros que caberia seria em {} L'.format(l))
