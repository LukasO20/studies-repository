# Número por Extenso
listanum = ('zero', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez',
            'onze', 'doze', 'treze', 'quatorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito','dezenove', 'vinte')
while True:
    nume = int(input('\33[1;34mDigite um número entre 0 e 20: '))
    if 0 <= nume <= 20:
        break
    print('\33[1;31mVocê digitou errado! ', end='')
print(f'\33[33mVocê digitou o número {listanum[nume]}')