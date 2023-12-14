# Soma dos Pares
print('Somando números Pares')
somado = 0
count = 0
for soma in range(1,7):
    num = int(input('Digite o {}° valor: '.format(soma)))
    if num % 2 == 0:
        somado += num
        count += 1
print('A soma dos {} valores pares é {}'.format(count, somado))
