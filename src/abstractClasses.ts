abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}
}

class Instagrams extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }
}
