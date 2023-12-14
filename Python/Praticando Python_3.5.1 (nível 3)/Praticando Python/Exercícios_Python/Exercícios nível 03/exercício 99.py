# Função que descobre o maior
import time
def maior(* n):
    contador = maior = 0
    print('=°'*30)
    print('\33[0;33mVerificando os valores... ')
    for item in n:
        print(f'{item} ', end='')
        time.sleep(0.6)
        if contador == 0:
            maior = item
        else:
            if item > maior:
                maior = item
        contador += 1
    print(f'Foram informados {contador} números ao todo')
    print(f'O maior número é {maior}')


maior(1, 5, 7, 8, 9, 12)
maior(5, 8, 55, 2, 10, 35)
maior(8)
maior()

