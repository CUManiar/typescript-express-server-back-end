import express, { Application } from "express";

class App {
  public app: Application;
  public port: number;

  constructor(appInit: { port: number; middleWares: any; controllers: any }) {
    this.app = express();
    this.port = appInit.port;
    this.middleWares(appInit.middleWares);
    this.routes(appInit.controllers);
  }

  private middleWares(middleWares: {
    forEach: (arg0: (middleWare: any) => void) => void;
  }) {
    middleWares.forEach((middleWare) => {
      this.app.use(middleWare);
    });
  }

  private routes(controllers: {
    forEach: (arg0: (middleWare: any) => void) => void;
  }) {
    controllers.forEach((controller) => {
      this.app.use("/api", controller.router);
    });
  }

  /**
   * TODO: Uncomment if needed to serve static content
   */

  // private assets() {
  //     this.app.use(express.static('public'));
  //     this.app.use(express.static('views'));
  // }

  /**
   * Host the server on port
   */
  public listen() {
    this.app.listen(this.port, (err: string) => {
      if (err) {
        return console.log("Error connecting server !");
      }
      return console.log(`Server started on port ${this.port}`);
    });
  }
}

export default App;
