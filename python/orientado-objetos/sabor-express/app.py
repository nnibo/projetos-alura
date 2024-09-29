import os #biblioteca do python

print('Sabor Express\n')

print('1. Cadastrar Restaurante')
print('2. Listar Restaurante')
print('3. Ativar Restaurante')
print('4. Sair\n')

opcao_escolhida = int(input('Escolha uma opção: '))
#opcao_escolhida = int(opcao_escolhida)

print('Voce escolheu a opcao', opcao_escolhida)
#print(f'Voce escolheu a opcao {opcao_escolhida}') 

def finalizar_app():
    os.system('cls')
    print('Finalizando o app\n')
    

if opcao_escolhida == 1: 
    print('Cadastrar restaurante')
elif opcao_escolhida == 2: 
    print('Listar restaurante')
elif opcao_escolhida == 3: 
    print('Ativar restaurante')
else:
    finalizar_app()
    


