# Soma Par
from random import randint
from time import sleep

def sorteado(n):
    print('\33[0;32m°-'*25)
    print('Estou sorteando...')
    for item in range(1, 11):
        rand = randint(1, 10)
        caixa.append(rand)
        print(f'{rand}..', end=' ')
        sleep(0.6)
    print('Finalizado!')


def par(n):
    print('°-'*30)
    contador = 0
    for num in caixa:
        if num % 2 == 0:
            contador += num
    print(f'Somei os valores pares {caixa} = {contador}!')

caixa = []
sorteado(caixa)
par(caixa)

