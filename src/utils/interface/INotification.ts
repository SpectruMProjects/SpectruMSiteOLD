export interface IError {
  text: string;
  id: string;
}

export interface IAction {
  id: string;
  text: string;
  action?: { func: Function; text: string };
}
