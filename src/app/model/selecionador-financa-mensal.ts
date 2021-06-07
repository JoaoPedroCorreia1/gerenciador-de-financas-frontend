import { Financa } from "./financa";

export class SelecionadorFinancaMensal {

    static selecionar(
        financas: Financa[],
        tipoSelecao: number,
        ano: number,
        mes: number,
        dia: number
        ): any{

        var selecionadas = financas.filter(f => f.repeticao === 1); // == Mensal
        
        switch(tipoSelecao) { 

          case  0: { // == Dia

            selecionadas = selecionadas.filter(f => f.dia === dia);

            // atribui data
            selecionadas.forEach((financaDeRepeticaoMensal, i) => {
              financaDeRepeticaoMensal.mes = mes;
              financaDeRepeticaoMensal.ano = ano;
            })

            break;

          }
  
          case  1: { // == Mes
          
            // atribui data
            selecionadas.forEach((financaDeRepeticaoMensal, i) => {
              financaDeRepeticaoMensal.mes = mes;
              financaDeRepeticaoMensal.ano = ano;
            })

            break;
          }
  
          case  2: { // == Ano

            var selecionadasAno: Financa[] = []
            // a finança mensal é repetida 12 vezes ao ano 
            selecionadas.forEach( (financaDeRepeticaoMensal, i) => { 

              for(let mesLocal = 1; mesLocal < 13; mesLocal++) {
                const financaMensal: Financa = {
                  nome: financaDeRepeticaoMensal.nome,
                  valor: financaDeRepeticaoMensal.valor,
                  tipoFinanca: financaDeRepeticaoMensal.tipoFinanca,
                  repeticao: financaDeRepeticaoMensal.repeticao,
                  dia: financaDeRepeticaoMensal.dia,
                  mes: mesLocal,
                  ano: ano
                };

                selecionadasAno.push(financaMensal);
              }

            });

            selecionadas = selecionadasAno;
  
            break;
          }

          default: {

            return null;

          }

        }

        return selecionadas;

      }

}
