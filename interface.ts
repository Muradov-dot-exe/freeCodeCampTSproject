interface Users {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  startTrial(): string;
  getCoupon(couponname: string, value: number): number;
}

interface Users {
  githubToken: string;
}

interface Admin extends Users {
  role: "admin" | "ta" | "learner";
}

const hitesh: Admin = {
  dbId: 12,
  email: "hsdas",
  userId: 1,
  githubToken: "git",
  role:"admin"
  startTrial: () => {
    return "trial";
  },
  getCoupon: (name: "bruhname", value: 10) => {
    return 10;
  },
};

hitesh.email = "hsdas";
