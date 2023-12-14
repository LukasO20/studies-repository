# Tratando Varios Valores
import time
print('Somando e Adicionando Valores!')
num = int(input('Digite um número: '))
time.sleep(2)
print('Se digitar o número 999 você encerra a soma!')
somado = 0
while num <= 999:
    num2 = int(input('Deseja adicionar mais números? '))
    num += num2
    somado += 1
    if num <= 999:
        print('O resultado total deu {}'.format(num))
time.sleep(2)
print('#'*50)
print('Foram somados {} números :) com exeção do 999'.format(somado))
print('Acabou! Obrigado por usar o programa :) ')
print('#'*50)
