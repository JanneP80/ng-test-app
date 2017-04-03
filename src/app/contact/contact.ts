export class Contact {
  get id(): number {
    return this._id;
  }

  get firstName(): string {
    return this._firstName;
  }

  get lastName(): string {
    return this._lastName;
  }
  private _id: number;
  private _firstName: string;
  private _lastName: string;

  set id(value: number) {
    this._id = value;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  constructor(id?: number, firstName?: string, lastName?: string) {
    this._id = id;
    this._firstName = firstName;
    this._lastName = lastName;
  }
}
