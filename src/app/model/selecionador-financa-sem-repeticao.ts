import { Financa } from "./financa";

export class SelecionadorFinancaSemRepeticao {  

    
    static selecionar( 
        financas: Financa[],
        tipoSelecao: number,
        ano: number,
        mes: number,
        dia: number
        ): any{

    var selecionadas = financas.filter(f => f.repeticao === 0); // == Sem Repetição
        
        switch(tipoSelecao) { 
    
          case  0: { // == Dia
          
            selecionadas = selecionadas.filter(f => f.ano === ano);
    
            selecionadas = selecionadas.filter(f => f.mes === mes);
    
            selecionadas = selecionadas.filter(f => f.dia === dia);
    
            break;
          }
    
          case  1: { // == Mes
          
            selecionadas = selecionadas.filter(f => f.ano === ano);
    
            selecionadas = selecionadas.filter(f => f.mes === mes);
    
            break;
          }
    
          case  2: { // == Ano
          
            selecionadas = selecionadas.filter(f => f.ano === ano);
    
            break;
          }
    
          default: {
    
            return null;
    
          }
    
        }
    
        return selecionadas;
    
    }
      
}
