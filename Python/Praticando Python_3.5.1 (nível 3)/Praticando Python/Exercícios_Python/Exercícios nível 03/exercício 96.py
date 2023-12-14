# Função que calcula área
import time
print('\33[1;32mDefina a base e altura para o calculo da area')
def area(b, a):
    x = b * a
    print(f'Calculando...')
    time.sleep(1.5)
    print(f'°~'*35)
    print(f'\33[0;34mA {base} base informada, vezes {altura} de altura possui uma area de {x:.1f}(m²)')
    print(f'°~'*35)


base = float(input('Digite a base (m): '))
altura = float(input('Agora digite a altura (m): '))
area(base, altura)
