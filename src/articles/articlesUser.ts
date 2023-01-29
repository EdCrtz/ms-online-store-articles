class User {
  id?: string;
  name?: string;
  email?: string;
  password?: string;
  createdAt?: Date;
  updatedAt?: Date;

  constructor(
    id?: string,
    name?: string,
    email?: string,
    password?: string,
    createdAt?: Date,
    updatedAt?: Date,
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

export class ArticleUser {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  createdAt: Date;
  updatedAt: Date;
  user: User;
  userId: string;

  constructor(
    id: string,
    name: string,
    description: string,
    price: number,
    image: string,
    createdAt: Date,
    updatedAt: Date,
    user: User,
    userId: string,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.image = image;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.user = user;
    this.userId = userId;
  }
}
