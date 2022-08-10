import { TextInput, Button, Browser, Page, findBy, elementIsVisible, pageHasLoaded, WebComponent } from '../common';
import { HomePage } from './public/HomePage';
import { config } from '../config';
import { publicUser } from '../local-config';

export class ScoutAiSingInPage extends Page {
  public userName: string = publicUser.userName;
  public userPassword: string = publicUser.userPassword;
  constructor(browser: Browser) {
    super(browser);
    this.setUrl(`${config.publicUrl}`);
  }

  @findBy('//input[@id="LoginUserName"]')
  public email!: TextInput;
  
  @findBy('//input[@id="LoginPassword"]')
  public password!: TextInput;
  
  @findBy('//button[@id="SigninButton"]')
  public singIn!: Button;

  @findBy('//div[@class="login-error"]/div')
  public loginErrorText!: WebComponent;

  @findBy('//*[@class="show-password-icon"]')
  public eyeIcon!: WebComponent;

  public loadCondition() {
    return elementIsVisible(() => this.email);
  }

  public async signIn() {
    return this.signInAs(this.userName, this.userPassword, true);
  }
  
  public async signInError(user: string, password: string) {
    return this.signInAs(user, password, false);
  }

  public async signInAs(email: string, password: string, isCorrect: boolean = true) {
    await this.email.setValue(email);
    await this.password.setValue(password);
    await this.singIn.click();
    isCorrect && await this.browser.wait(pageHasLoaded(HomePage));
  }
}
