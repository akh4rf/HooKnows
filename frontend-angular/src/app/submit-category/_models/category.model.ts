import { Clue } from './clue.model';

export class Category {
  constructor(
    public author: string,
    public name: string,
    public clues: Clue[]
  ) {}
}
