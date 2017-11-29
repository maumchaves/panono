export class Picture {
  constructor(
    public id: string,
    public url: string,
    public title: string,
    public date: Date,
    public favorite: boolean
  ) {}
}

export class PicturesCollection {
  constructor(
    public next: string,
    public pictures: Picture[]
  ) {}
}