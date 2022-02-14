export type UserData = {
  id: string;
  userName: string;
  roomName: string;
};

class UserService {
  // to record user's information
  private userMap: Map<string, UserData>;

  constructor() {
    this.userMap = new Map();
  }

  addUser(data: UserData) {
    this.userMap.set(data.id, data);
  }

  removeUser(id: string) {
    if (this.userMap.has(id)) {
      this.userMap.delete(id);
    }
  }

  getUser(id: string) {
    if (!this.userMap.get(id)) return null;

    const data = this.userMap.get(id);
    if (data) {
      return data;
    }
  }

  userDataInfoHandler(
    id: string,
    userName: string,
    roomName: string
  ): UserData {
    return {
      id,
      userName,
      roomName,
    };
  }
}

export default UserService;
