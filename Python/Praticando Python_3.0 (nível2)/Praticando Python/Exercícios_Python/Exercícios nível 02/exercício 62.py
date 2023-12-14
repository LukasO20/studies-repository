# Progressão Arítmética V3.0
import time
print('Progressão Aritmética v3.0')
num = int(input('Digite um número, vamos conferir a PA desse número: '))
razão = int(input('Agora digite a razão: '))
termo = num
contador = 1
total = 0
vezes = 10
time.sleep(3)
print('''
A razão demonstrará o quanto de vezes o número será contado.''')
print('''Ex: 5.PA Razão.5 : 5...10...15...

''')
time.sleep(2)
print('-------- Progressão Atitmética de {} ! --------'.format(num))
while vezes != 0:
    total = total + vezes
    while contador <= total:
        termo += razão
        contador += 1
        print('{}...'.format(termo), end='')
    vezes = int(input('''
    Deseja Adicionar mais algum valor? (número) '''))
    time.sleep(2)
    print('Operação finalizada!')
print('Terminado! foram realizados {} termos no total'.format(total))