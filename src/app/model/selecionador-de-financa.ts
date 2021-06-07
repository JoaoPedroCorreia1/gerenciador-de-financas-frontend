import { Financa } from "./financa";
import { SelecionadorFinancaAnual } from "./selecionador-financa-anual";
import { SelecionadorFinancaMensal } from "./selecionador-financa-mensal";
import { SelecionadorFinancaSemRepeticao } from "./selecionador-financa-sem-repeticao";

export class SelecionadorDeFinanca {

    static SelecionarFinancaPorData(
        financas: Financa[],
        botaoTipoSelecaoSelecionado: number,
        dia:number, 
        mes:number,
        ano:number): Financa[]{

        var selecionadas: Financa[] = [];

        // selecionar finanças sem repetição
        const selecionadasSemRepeticao = SelecionadorFinancaSemRepeticao.selecionar(
          financas,
          botaoTipoSelecaoSelecionado,
          ano,
          mes,
          dia
        );

        // selecionar finanças com repetição mensal
        const selecionadasComRepeticaoMensal = SelecionadorFinancaMensal.selecionar(
          financas,
          botaoTipoSelecaoSelecionado,
          ano,
          mes,
          dia
        );

       // selecionar finanças com repetição anual
       const selecionadasComRepeticaoAnual = SelecionadorFinancaAnual.selecionar(
        financas,
        botaoTipoSelecaoSelecionado,
        ano,
        mes,
        dia
       )

        // concat => adiciona todos os elementos do outro array
        selecionadas = selecionadas.concat(selecionadasSemRepeticao);

        selecionadas = selecionadas.concat(selecionadasComRepeticaoMensal);

        selecionadas = selecionadas.concat(selecionadasComRepeticaoAnual);
    
        return selecionadas;
      }

}
