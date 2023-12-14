# Tabuada v.2.0
print('Prepare-se para a Tabuada 2.0 O.O')
num = int(input('Digite um número inteiro: '))
for tabu in range(1,11):
    multiplicado = num * tabu 
    print('{} x {} = {}'.format(num,tabu,multiplicado))
print('Como de padrão, a tabuada foi até o x10 :)')