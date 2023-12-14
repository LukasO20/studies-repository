# funções parte 2
def count(a, b):
    """"
    Digite o valor para contar!
    A e B recebe uma variável. (A = algum número)
    (B = algum número)
    Logo A + B é igual = ...
    A(8) + B(10) = 18
    """
    d = a + b
    print(f'{a} + {b} é igual a {d}')
    print('Valor contado :)')



#count(8, 10)
#help(count)
#print('*°'*25)
#count(8, 10)

def junto(a = 0, b = 0, c = 0): # Parametro igual a 0 ignifica que a função receberá valore iguai ou maiore que 0!
    junt = a + b + c
    print(f'{a} + {b} + {c} = {junt}')
    print('Valore$ $omado$ :)')

#junto(15, 9)

def option():
    """"
    Tudo dentro do def é uma variável local (escopo local)
    """
    #t1 = 8
    #print(f'Variável local recebe {t1}')
    #print(f'Variável global recebe {n}')



#n = 10
#option()


#def testemunha():
    #n1 = 15
    #print(f'Eu sou um escopo local logo n1 dentro do DEF vale {n1}')
    # Caso eu digita variavel (um valor) é posível de utilizar escopo global dentro do def
    # global (alguma variável)

#n1 = 45
#testemunha()
#print(f'Eu sou o escopo global logo n1 fora do DEF vale {n1}')

#def vezes(a = 0, b = 0, c = 0):
    #v = a + b + c
    #return v

#t1 = vezes(8, 89, 9)
#t2 = vezes(8, 2)
#t3 = vezes(8)

#print(f' Variável t1 {t1}, t2 {t2}, t3 {t3}')

def par(a):
    if n % 2 == 0:
        return True
    else:
        return False

n = int(input('Digite um número para conferir se é par ou não: '))
if par(n):
    print('Esse número é par')
else:
    print('Esse número é impar')
