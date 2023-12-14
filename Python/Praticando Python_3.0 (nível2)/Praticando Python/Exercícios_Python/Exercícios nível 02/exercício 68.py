# Jogo do Impar ou Par
from random import randint
import time
print('\33[1;33m Bem Vindo (a) ao Impar ou Par')
partidas = 0
while True:
    escolhido = ' '
    pcescolhe = randint(0,10)
    partidas += 1
    print('\33[1;33m Escolha um número de 0 a 10!')
    time.sleep(2)
    jescolhe = int(input('Digite um número: '))
    print('P = Par I = Impar')
    escolhido = str(input('Eu escolhi Par [P] ou Impar [I]: ')).strip().upper()
    if jescolhe == 'I' or 'i':
        somados = jescolhe + pcescolhe
        resultado = (jescolhe + pcescolhe) % 2
        if resultado == 0 and escolhido == 'P':
            print('\33[1;35m Eu também estou escolhendo espera ai...')
            time.sleep(2)
            print('\33[1;33m=' * 60)
            print('\33[1;34m O Computador escolheu {} e você {} somando é {}'.format(pcescolhe, jescolhe, somados))
            print(f'{partidas} vitórias consecutivas! Você ganhou')
            print('\33[1;33m=' * 60)
        else:
            print('\33[1;35m Eu também estou escolhendo espera ai...')
            time.sleep(2)
            print('\33[1;33m=' * 60)
            print(f'O Computador escolheu {pcescolhe} e o Jogador {jescolhe} somando é {somados} DEU IMPAR')
            print('\33[1;31mVocê perdeu!')
            print('\33[1;33m=' * 60)
            break
            if resultado == 1 and escolhido == 'I':
                print('\33[1;35m Eu também estou escolhendo espera ai...')
                time.sleep(2)
                print('\33[1;33m=' * 60)
                print('\33[1;34m O Computador escolheu {} e você {} somando é {}'.format(pcescolhe,jescolhe,somados))
                print(f'{partidas} vitórias consecutivas! Você ganhou')
                print('\33[1;33m=' * 60)
            else:
                print('\33[1;35m Eu também estou escolhendo espera ai...')
                time.sleep(2)
                print('\33[1;33m='* 60)
                print(f' O computador escolheu {pcescolhe} e o Jogador {jescolhe} somando é {somados} DEU PAR')
                print('\33[1;31mVocê perdeu!')
                print('\33[1;33m=' * 60)
                break
