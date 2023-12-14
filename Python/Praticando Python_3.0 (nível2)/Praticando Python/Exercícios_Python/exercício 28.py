import random
import time
print('''
#############################################
##                                         ##
##    Pense em um número entre 0 e 5...    ##
## Eu vou pensar eu outro número por aqui, ##
##      você tem que adivinhar...          ##
##                                         ##   
############################################# 
''')

numero = int(input('Pensou? Então digite aqui, vou amostrar a resposta: '))
print('Estou pensando também, calma ai!!')
time.sleep(3)
numeros = [0,1,2,3,4,5]
result = random.choice(numeros)
if numero == result:
    print('Parabéns, você ganhou!! Eu pensei no {} também'.format (result))
else:
    print('Que pena, você perdeu T-T Eu pensei no {}'.format(result))