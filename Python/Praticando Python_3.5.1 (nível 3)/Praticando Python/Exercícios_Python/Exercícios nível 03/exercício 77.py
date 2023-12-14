# Contado vogais em Tuplos
import time
print('\33[0;32mÉ VOLGAL OU NÃO É VOGAL? (TUPLA)')
time.sleep(3)
print('Digite palavras sem assentuação!')
box = (str(input('\33[0;32mDigite um palavra: ')).strip().lower(),
       str(input('Digite a segunda palavra: ')).strip().lower(),
       str(input('Digite a terceira palavra: ')).strip().lower(),
       str(input('Digite a quarta palavra: ')).strip().lower(),
       str(input('Digite a quinta palavra: ')).strip().lower(),
       str(input('Digite a sexta palavra: ')).strip().lower(),
       str(input('Digite a última palavra: ')).strip().lower(),
       )
for words in box:
    print(f'\n\33[1;34mNa palavra {words.upper()} temos a vogal: ', end='')
    for letra in words:
        if letra.lower() in 'aeiou':
            print(f'\33[0;31m{letra}', end=' ')