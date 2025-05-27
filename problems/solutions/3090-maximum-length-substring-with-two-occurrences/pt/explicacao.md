## Explicação da Solução

Utilizamos a técnica de **janela deslizante (sliding window)** para controlar a substring onde cada caractere aparece no máximo duas vezes.

- Mantemos dois ponteiros, `l` e `r`, que representam as extremidades da janela.
- Um dicionário `counter` armazena a contagem de cada caractere na janela.
- Expandimos a janela movendo `r` para a direita e adicionamos o caractere atual no `counter`.
- Se algum caractere aparecer **três vezes**, reduzimos a janela pela esquerda (`l`) até que ele apareça no máximo duas vezes.
- Durante cada expansão, atualizamos `_max` para armazenar o comprimento da janela atual válida.
- No final, retornamos `_max`.

Assim, garantimos sempre a substring mais longa onde cada caractere ocorre no máximo duas vezes.
