import {
  SignInInput,
  SignInResponse,
  RegisterInput,
  RegisterResponse
} from '@/entities/authentication';
import { User } from '@/entities/user';
import { delay } from '@/shared/lib';
import {
  localStorageGetItem,
  localStorageSetItem
} from '@/shared/lib/localStorage';

enum LocalStorageKeys {
  User = 'user',
  Todo = 'todo'
}

export class MockServer {
  users: User[] = [];
  todo: User[] = [];

  constructor() {
    this.users = localStorageGetItem(LocalStorageKeys.User, []);
    this.todo = localStorageGetItem(LocalStorageKeys.Todo, []);
  }

  async login({ email, password }: SignInInput): Promise<SignInResponse> {
    const foundUser = this.users.find(
      user =>
        user.email === email &&
        (user as { password?: string }).password === password
    );

    delay(1000);

    if (foundUser) {
      return {
        accessToken:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla efficitur aliquet. Nulla ultrices ullamcorper finibus. Nulla metus leo, consectetur consectetur convallis in, consequat ut felis. Cras quis ultricies lorem. Suspendisse cursus at est et feugiat. Sed a elementum lectus. Curabitur aliquam consequat ex, sit amet fermentum nisi egestas sit amet. Nunc id lacinia elit. Vestibulum ut ante vitae elit fermentum condimentum. Vestibulum fermentum semper magna, non congue nibh ultricies vitae. Morbi non sapien lorem. Nullam in arcu placerat, tincidunt ex eget, pharetra dui',
        message: 'Login Success',
        success: true
      };
    }

    throw new Error('User not found! Login failed');
  }

  async register({
    email,
    firstName,
    lastName,
    password
  }: RegisterInput): Promise<RegisterResponse> {
    const hasExisted = !!this.users.find(user => user.email === email);

    if (hasExisted) {
      throw new Error('User has existed. Please user another email');
    }

    const newUsers = this.users.concat({
      id: new Date().toISOString(),
      email,
      firstName,
      lastName,
      password
    } as User);

    localStorageSetItem(LocalStorageKeys.User, newUsers);

    delay(1000);

    return {
      message: 'Register Success',
      success: true
    };
  }
}
