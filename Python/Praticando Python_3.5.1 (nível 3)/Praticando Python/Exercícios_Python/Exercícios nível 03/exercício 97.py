# Adaptando a frase... O.O
import time
def adapt(txt):
    item = len(frase) - 2
    print(f'Adaptando um visual...')
    time.sleep(1.5)
    print('\33[1;33m-°' * item)
    print(f'  {frase}')
    print('-°' * item)


while True:
    frase = str(input('Digite a frase que desejar :) '))
    adapt(frase)
    question = str(input('Deseja adicionar mais uma frase? [S] Sim [N] Não ')).strip().upper()[0]
    if question in 'Nn':
        print('Finalizando...')
        time.sleep(1.5)
        break
