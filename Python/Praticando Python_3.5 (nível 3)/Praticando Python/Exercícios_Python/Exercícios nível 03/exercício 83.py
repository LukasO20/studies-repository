# Expressões Matemática
print('Criando Expressões matemáticas')
expression = str(input('Digite um expressão: '))
boxexpression = []
for parenteses in expression:
    if parenteses == '(':
        boxexpression.append('(')
    elif parenteses == ')':
        if len(boxexpression) > 0:
            boxexpression.pop()
        else:
            boxexpression.append(')')
            break
if len(boxexpression) == 0:
    print(f'\33[0;32mSua expressão {expression} está válida!')
else:
    print(f'\33[0;32mSua expressão {expression} está inválida!')