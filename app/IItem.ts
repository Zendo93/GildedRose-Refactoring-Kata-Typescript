export interface IItem {
  name: string;
  sellIn: number;
  quality: number;

  update(): void;
}
