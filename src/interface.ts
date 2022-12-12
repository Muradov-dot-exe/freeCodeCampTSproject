interface TakePhotos {
  cameraMode: string;
  filter: string;
  burst: number;
}

class Instagram implements TakePhotos {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {}
}
