/**
 * Specify required object
 *
 * @examples require(".").sampleData
 */
export interface IModel {
  callbackUrl: string;
}

export const sampleData: IModel[] = [
  {
    callbackUrl: "https://rocketmakers.com",
  },
];
