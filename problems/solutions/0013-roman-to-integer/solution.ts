class Solution{}
    function romanToInt(s: string): number {

        const valores: { [key: string]: number } = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        };

        let total = 0;      // Declarando a Variavel: Total
        let anterior = 0;   // Declarando a Variavel: Anterior

        for (let i = s.length - 1; i >= 0; i--) {
            const atual = valores[s[i]];

            if (atual < anterior) {

                // Subtrai se o valor atual for menor que o anterior
                total -= atual;
            } else {
                // Soma normalmente
                total += atual;
            }

            // Atualiza o valor anterior para a próxima iteração

            anterior = atual;
        }
        
        return total;
    }
