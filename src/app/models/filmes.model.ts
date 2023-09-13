export interface FilmesRecomendados {
  id: number;
  nomeFilme: string;
  banner: string;
  fotoUsuario: string;
  nomeUsuario: string;
  data: Date;
}

export interface FilmesLancamentos {
  id: number;
  titulo: string;
  banner: string;
  data: Date;
}

export interface Usuarios {
  nome: string;
  email: string;
  senha: string;
}

export interface MeusFilmes {
  id: string;
  titulo: string;
  img_fundo:string;
  banner: string;
  ano: string;
  tipo: string;
  genero: string;
  sinopse: string;
  lancamento: string;
  nota: string;
  duracao: string;
  lingua: string;
  roteiro: string;
  diretor: string;
  atores: string;
  premios: string;
}

export interface RecomendaFilmes {
  id: string;
  titulo: string;
  img_fundo:string;
  banner: string;
  ano: string;
  tipo: string;
  genero: string;
  sinopse: string;
  lancamento: string;
  nota: string;
  duracao: string;
  lingua: string;
  roteiro: string;
  diretor: string;
  atores: string;
  premios: string;
}
