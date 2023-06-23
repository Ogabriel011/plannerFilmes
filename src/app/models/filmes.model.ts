export interface FilmesRecomendados{
  id: number;
  nomeFilme:string;
  banner: string;
  fotoUsuario: string;
  nomeUsuario: string;
  data: Date
}

export interface FilmesLancamentos{
  id: number;
  titulo:string;
  banner:string;
  data:Date
}

export interface Usuarios{
  nome: string,
  email: string,
  senha: string
}

export interface MeusFilmes{
  id:number;
  titulo:string;
  banner:string;
  ano: string;
  tipo:string;
  genero:string;
}
