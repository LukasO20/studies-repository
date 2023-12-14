# Tabuada v3.0
print('\33[1;32m Tabuada versão 3.0 !')
print('\33[1;31m Caso digite um valor negativo você encerra o programa')
while True:
    t = int(input('\33[1;34m Digite um valor para ver a tabuada: '))
    if t < 0:
        break
    print('='*40)
    for x in range(1,11):
        print(f'{t} x {x} == {t*x}')
    print('='*40)
print('\33[1;32m Acabou a tabuada :)')