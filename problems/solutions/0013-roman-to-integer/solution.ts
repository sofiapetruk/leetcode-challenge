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

        let total = 0;      
        let anterior = 0;   

       
        for (let i = s.length - 1; i >= 0; i--) {
            const atual = valores[s[i]];

            if (atual < anterior) {
                
                total -= atual;
            } else {
                
                total += atual;
            }

          
            anterior = atual;
        }
        
        return total;
    }
