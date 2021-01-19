export interface Player {
  position: number;
  name: string;
  score: number;
}

export interface Thread {
  id: number;
  name: string;
  messages: Message[];
}

export interface Message {
  id: number;
  author: string;
  date: Date;
  text: string;
}
