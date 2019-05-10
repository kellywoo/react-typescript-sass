class ErrorLog {
  log(from: string, err: any) {
    console.warn(from, JSON.stringify(err));
  }
}

export const errorLog = new ErrorLog();
