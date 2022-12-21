export interface IError {
  text: string;
  time?: number;
  id: string;
}

export interface IAction {
  id: string;
  text: string;
  time?: number;
  action?: { func: Function; text: string };
}

export interface INotify {
  pending: boolean;
  time?: number;
}
