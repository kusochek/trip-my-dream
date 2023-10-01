const value: number = 10;
const str: string = 'Some string';
const isTrue: boolean = false;

const firstName: string | null | undefined = null;

type NameType = string | null | undefined;

const lastName: NameType = 'Tratata';

enum UserStatus {
  ONLINE = 'online',
  OFFLINE = 'offline',
  DELETED = 'deleted',
};

// type UserItem = {
//   firstName: string | null;
//   lastName: string;
//   age: number;
//   isMarried: boolean;
//   pet?: 'dog' | 'cat';
//   status: UserStatus;
// }

interface UserItem {
  firstName: string | null,
  lastName: string,
  age: number,
  isMarried: boolean,
  pet?: 'dog' | 'cat',
  status: UserStatus,
}

interface UserItemMale extends UserItem {
  boroda: boolean,
  smoking: boolean,
}

const user: UserItem = {
  firstName: 'Olya',
  lastName: 'Zhuk',
  age: 26,
  isMarried: false,
  pet: 'dog',
  status: UserStatus.ONLINE,
};

const useMale: UserItemMale = {
  firstName: 'Daniel',
  lastName: 'Luboskii',
  age: 24,
  isMarried: false,
  pet: 'dog',
  status: UserStatus.ONLINE,
  boroda: true,
  smoking: false,
}

function sum(a: number | undefined, b: number): number | undefined {
  if (a) return a + b;
}

sum(1, 2);

function doSomething(): void {
  console.log(1 + 2);
}
