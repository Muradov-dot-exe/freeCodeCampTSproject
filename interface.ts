interface Users {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  startTrial(): string;
}

const hitesh: Users = {
  dbId: 12,
  email: "hsdas",
  userId: 1,
  startTrial: () => {
    return "trial";
  },
};

hitesh.email = "hsdas";
