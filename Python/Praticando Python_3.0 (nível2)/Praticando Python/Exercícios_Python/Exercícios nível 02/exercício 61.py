# Progressão Aritmética V2.0
import time
print('Progressão Aritmética com While!')
primeiro = int(input('Digite um número para a PA: '))
razão = int(input('Agora digite a razão (um número): '))
time.sleep(2)
print('Obs: a razão demonstra de quantas vezes o número será exibido.')
time.sleep(3)
termo = primeiro
contador = 1
while contador <= 10:
    termo += razão
    contador += 1
    print('{} ...'.format(termo), end='')
print('Acabou :)')