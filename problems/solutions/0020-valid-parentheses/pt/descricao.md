# 20. Valid Parentheses

Dada uma string `s` contendo apenas os personagens`'('`,`')'`,`'{'`,`'}'`,
`'['` e `']'`, determine se a sequência de entrada é válida.

Uma sequência de entrada é válida se:

1. Suportes abertos devem ser fechados pelo mesmo tipo de colchetes.
2. Os suportes abertos devem ser fechados na ordem correta.
3. Todo suporte próximo possui um suporte aberto correspondente do mesmo tipo.

## Exemplo 1:

Entrada: s = "()"

Saída: true

## Exemplo 2:

Entrada: s = "() [] {}"

Saída: true

## Exemplo 3:

Entrada: s = "(]"

Saída: false

## Exemplo 4:

Entrada: s = "([])"

Saída: true

## restrições

- `1 <= S.Length <= 104`
- `s` consiste em apenas parênteses`'() [] {}'`.
