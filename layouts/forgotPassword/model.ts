/**
 * Specify required object
 *
 * @examples require(".").sampleData
 */
export interface IModel {
  username: string;
  returnUrl: string;
}

export const sampleData: IModel[] = [
  {
    username: "test@rocketmakers.com",
    returnUrl: "https://rocketmakers.com",
  },
];
