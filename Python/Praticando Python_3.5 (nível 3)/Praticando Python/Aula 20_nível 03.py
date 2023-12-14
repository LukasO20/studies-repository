
#TODOS OS CÓDIGOS ABAIXO SÃO EXEMPLOS!


#def adc(a, b):
    #print('Estou somando...')
    #soma = a + b
    #print(f'O valor {a} + {b} é igual a {soma}')

#adc(a=7, b=8) # pode ser assim com def
#adc(10, 20) # ou assim com o def
#adc(11, 22)

#def ilimitado(*num):
    #tam = len(num)
    #print(f' Contei {tam} valores e eles são: {num}')

#ilimitado(4, 5, 8, 9)
#ilimitado(5, 6, 5, 8, 10)
#ilimitado(2, 10, 20)

def soma(* valores):
    s = 0
    for numero in valores:
        s += numero
    print(f'Somando os valores {valores} a soma é {s}')


soma(5, 6)
soma(7, 8, 9, 20)
