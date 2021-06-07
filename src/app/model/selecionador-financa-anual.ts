import { Financa } from "./financa";

export class SelecionadorFinancaAnual {

    static selecionar(
        financas: Financa[],
        tipoSelecao: number,
        ano: number,
        mes: number = 0,
        dia: number = 0
        ): any{

        var selecionadas = financas.filter(f => f.repeticao === 2); // == Anual
        
        switch(tipoSelecao) { 

          case  0: { // == Dia

            selecionadas = selecionadas.filter(f => f.mes === mes);

            selecionadas = selecionadas.filter(f => f.dia === dia);

            // atribui data
            selecionadas.forEach((financaDeRepeticaoAnual, i) => {
              financaDeRepeticaoAnual.ano = ano;
            })

            break;

          }
  
          case  1: { // == Mes
          
            selecionadas = selecionadas.filter(f => f.mes === mes);

            // atribui data
            selecionadas.forEach((financaDeRepeticaoAnual, i) => {
                financaDeRepeticaoAnual.ano = ano;
            })

            break;
          }
  
          case  2: { // == Ano
  
            break;
          }

          default: {

            return null;

          }

        }

        return selecionadas;

      }
      
}
