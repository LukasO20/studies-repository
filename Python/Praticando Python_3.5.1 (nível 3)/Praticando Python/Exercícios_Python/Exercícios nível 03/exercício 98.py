# Função de contador
import time
def contadorp(n1, n2, n3):
    if n3 == 0:
        print(f'Não é possível de realizar uma contagem sucessiva com 0. Tente novamente!')
    if n3 < 0:
        n3 *= -1
    print(f'°-'*25)
    print(f'Contando do numero {n1} até o {n2} a cada {n3} numeros...')
    time.sleep(1.5)
    if n1 < n2:
        cont = n1
        while cont <= n2:
            print(f'{cont}', end=' ')
            time.sleep(0.6)
            cont += n3
    else:
        cont = n1
        while cont >= n2:
            print(f'{cont}', end=' ')
            time.sleep(0.6)
            cont -= n3
        print(f'Finalizado')

print(f'{contadorp(1, 10, 1)}')
print(f'{contadorp(10, 2, 2)}')
print(f'°-' * 25)
print(f'Sua vez :)')
n1 = int(input('Deseja começar com qual número? '))
n2 = int(input('Até que número? '))
n3 = int(input('De quantas em quantas vezes? '))
contando = contadorp(n1, n2, n3)
print(f'{contando}')