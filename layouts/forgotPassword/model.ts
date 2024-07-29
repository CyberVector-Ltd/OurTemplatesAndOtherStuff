/**
 * Specify required object
 *
 * @examples require(".").sampleData
 */
export interface IModel {
  username: string;
  callbackUrl: string;
}

export const sampleData: IModel[] = [
  {
    username: "test@rocketmakers.com",
    callbackUrl: "https://rocketmakers.com",
  },
];
