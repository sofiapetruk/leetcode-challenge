1. Crie um dicionário `d` que guarda `[índice_inicial, contagem]` de cada caractere.  
2. Percorra `s` com `enumerate`:  
   - Se o caractere não está em `d`, faça `d[ch]=[i,1]`.  
   - Caso contrário, incremente `d[ch][1]`.  
3. Para cada valor em `d.items()`, retorne o índice do primeiro com contagem 1.  
4. Se não houver, retorne `-1`.  