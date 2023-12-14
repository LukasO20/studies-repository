# Maior e menor valor
print('\33[1;32mO que há dentro da caixa?')
import random
caixa = (random.randint(1,10), random.randint(1,10), random.randint(1,10),
         random.randint(1,10), random.randint(1,10))
print('\33[0;34mOs valores sorteados foram', end=' ')
for numero in caixa:
    print(f'{numero} -', end=' ')
print(f'\nO maior valor sorteado é o {max(caixa)}')
print(f'O menor valor sorteado é o {min(caixa)}')