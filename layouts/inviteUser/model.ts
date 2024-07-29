/**
 * Specify required object
 *
 * @examples require(".").sampleData
 */
export interface IModel {
  returnUrl: string;
}

export const sampleData: IModel[] = [
  {
    returnUrl: "https://rocketmakers.com",
  },
];
