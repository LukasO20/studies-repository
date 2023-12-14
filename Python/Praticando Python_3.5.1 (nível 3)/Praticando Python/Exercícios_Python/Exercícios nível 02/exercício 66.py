# Vários números com flag
print('\33[1;32m Sequência e Quantidade')
n = s = q = 0
while True:
    n = int(input('Digite um número [999] interrompe: '))
    if n == 999:
        break
    s += n
    q += 1
print(f'A soma dos {q} números informados é {s}')
print('\33[1;33m Obrigado por usar o Aplicativo! :)')