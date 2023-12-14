# Estrutura de Repetição While

# for apple in range (1,10):
#   print(apple)
# print('fim')

apple = 1
while apple != 0:
    apple = int(input('Quantas maças você quer? '))
    print('Prontinho aqui está suas {} maças'.format(apple))
    print('Se você não digitar "0" eu não vou para de vender hehehe...')
print('ACABOU!')