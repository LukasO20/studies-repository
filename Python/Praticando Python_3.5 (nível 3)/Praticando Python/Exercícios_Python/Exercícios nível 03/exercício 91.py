# Dadinho rolando
from random import randint
import time
from operator import itemgetter
print('A PARTIDA JÁ VAI COMEÇAR!')
time.sleep(2)
partida = {'Jogador 1': randint(1, 6),
           'Jogador 2': randint(1, 6),
           'Jogador 3': randint(1, 6),
           'Jogador 4': randint(1, 6)}
ranking = []
for cod, jg in partida.items():
    print(f'\33[0;32mO {cod} lançou o dado = {jg}')
    time.sleep(1.2)
ranking = sorted(partida.items(), key=itemgetter(1), reverse=True)
print()
print('\33[1;34m=+'*17)
print('=+     Ranking dos Jogadores    =+')
for item, valor in enumerate(ranking):
    time.sleep(0.8)
    print(f'=+ {item+1}º para o {valor[0]}: Dado. {valor[1]} =+')
print('\33[1;34m=+' * 17)
