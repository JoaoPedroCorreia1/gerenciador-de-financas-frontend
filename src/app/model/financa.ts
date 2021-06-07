export class Financa {
  id?: string;
  nome!: string;
  valor!: number;

  //0 = Receita, 1 = Despesa 
  tipoFinanca!: number;

  repeticao!: number;

  //data
  dia!: number;
  mes!: number;
  ano!: number;
}
