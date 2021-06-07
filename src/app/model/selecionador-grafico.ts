import { Financa } from "./financa";
import { GraficosBarra } from "./graficos-barra";
import { GraficosDoughnut } from "./graficos-doughnut";

export class SelecionadorGrafico {
    
    // doughnut
    static ObterDadosGraficoDoughnut(
        financas: Financa[],
        tipoDoughnut: number
        ): any{

        if(tipoDoughnut == 0){ // == Total

            return GraficosDoughnut.selecionarDadosGraficoDoughnutTotal(financas);

        }

        if(tipoDoughnut == 1){ // == Balanço

            return GraficosDoughnut.selecionarDadosGraficoDoughnutBalanco(financas);

        }

        return null;
    }

    // barra
    static ObterDadosGraficoBarra(
        financas: Financa[],
        tipoBarra: number,
        ano: number,
        mes: number = 0
        ): any{

        if(tipoBarra == 0){ // == Mensal

            return GraficosBarra.selecionarDadosGraficoBarraMensal(financas, mes, ano);

        }

        if(tipoBarra == 1){ // == Anual

            return GraficosBarra.selecionarDadosGraficoTabelaAnual(financas, ano);

        }

        return null;
    }

}
