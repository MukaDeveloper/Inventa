export interface IEventRouter {
  route(event: { type: string; payload: any }): Promise<void>;
}
