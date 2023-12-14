# Mega Sena
from random import randint
import time
quadro = []
jogos = []
partidas = 0
rodada = int(input('Deseja quantas partidas sorteadas? '))
while partidas <= rodada - 1:
    contador = 0
    while True:
        numero = randint(1, 60)
        if numero not in quadro:
            quadro.append(numero)
            contador += 1
        if contador >= 6:
            break
    jogos.append(quadro[:])
    quadro.clear()
    partidas += 1
    quadro.sort()
print('\33[1;32m------ O Jogo vai começar ------ ')
for i, l in enumerate(jogos):
    time.sleep(1)
    print(f'Jogo: {i+1} > {l}')
print('------------ Bom Jogo! -------------')