import { Financa } from "./financa";

export class AdicionadorDeFinanca {

    static criarFinanca(financaForm: any): any{
      //valores financa

      var financa_valor: number = financaForm.value.valor; const financa_nome: string = financaForm.value.nome;
      const financa_tipoFinanca: number = financaForm.value.tipoFinanca;
      const financa_repeticao: number = financaForm.value.repeticao;

      //Obter data
      let {
      financa_dia,
      financa_mes,
      financa_ano} = this.obterData(financaForm.value.data, financa_repeticao);


      //  checa se possui valores validos,
      //  caso não possua retorna uma mensagem

      if(isNaN(financa_valor) ||
        financa_nome == null){
        // retorna nulo
        return new Financa();
      }

      if(financa_valor <= 0){
        // retorna tipo de erro
        return "Erro Valor Negativo";
      }

      if(financa_valor.toString().length > 21){
        return "Erro Valor Alto";
      }

      if(financa_nome.length > 20){
        return "Erro Nome Grande";
      }
  
      // caso despesa, torna valor negativo
      if(financa_tipoFinanca == 1){
        financa_valor *= -1;
      }
  
      // criar e adicionar financa
      const financa: Financa = {
        nome: financa_nome,
        valor: financa_valor,
        tipoFinanca: financa_tipoFinanca,
        repeticao: financa_repeticao,
        dia: financa_dia,
        mes: financa_mes,
        ano: financa_ano
      };
      
      return financa;
  }
    
    // Funções Privadas

    private static obterData(data: any, repeticao: number): any{

      // definir datas
      let dia = data.getDate();
      let mes = data.getMonth()+1
      let ano = data.getFullYear();

      if(repeticao == 1){ // Mensal

        ano = 0;
        mes = 0;

      }

      if(repeticao == 2){ // Anual

        ano = 0;

      }

      return {
      financa_dia: dia, 
      financa_mes: mes,
      financa_ano: ano
      };

    }
}
