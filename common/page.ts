import { Browser, WaitCondition } from '.';

export interface NewablePage<T extends Page> {
  new(browser: Browser): T;
}

export abstract class Page {
  private url: string = '';

  protected setUrl(url: string) {
    this.url = url;
  }

  public async navigate(route?: string): Promise<void> {
    await this.browser.navigate(`${this.url}${route ?? ''}`);
    await this.browser.wait(this.loadCondition());
  }

  public abstract loadCondition(): WaitCondition;

  public constructor(protected browser: Browser) {

  }
}
