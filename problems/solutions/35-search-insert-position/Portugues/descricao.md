# 35. Pesquisar Inserir Posição

Dado um array classificado de inteiros distintos e um valor de destino, retorne o índice se o destino for encontrado. Caso contrário, retorne o índice onde ele estaria se fosse inserido em ordem.

Você deve escrever um algoritmo com O(log n) complexidade do tempo de execução.

 

# Exemplo 1:

    
    
    Entrada: nums = [1,3,5,6], target = 5
    Saída: 2
    

# Exemplo 2:

    
    
    Entrada: nums = [1,3,5,6], target = 2
    Saída: 1
    

# Exemplo 3:

    
    
    Entrada: nums = [1,3,5,6], target = 7
    Saída: 4
     

# Restrições:

    1 <= nums.length <= 104
    -104 <= nums[i] <= 104
    nums contém distinto valores classificados ascendente ordem.
    -104 <= target <= 104