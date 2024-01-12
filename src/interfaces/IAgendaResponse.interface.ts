// Generated by https://quicktype.io

export interface IAgendaResponse {
  agendaId: number;
  startTime: string;
  endTime: string;
  room: string;
  sessionId: number;
  session: Session;
}

export interface Session {
  title: string;
  description: string;
  sessionType: SessionType | null;
  level: Level | null;
  duration: number;
  speakerId: number;
  agendas: null;
}

export enum Level {
  Avanzado = "Avanzado",
  Intermedio = "Intermedio",
  Principiante = "Principiante",
}

export enum SessionType {
  SesionCorta = "Sesion corta",
  SesionRegular = "Sesion regular",
  Workshop = "Workshop",
}
