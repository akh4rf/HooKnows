import { Clue } from './clue.model';

export class Category {
  constructor(public name: string, public clues: Clue[]) {}
}
