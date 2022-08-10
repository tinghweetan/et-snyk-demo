import { ScoutAiSingInPage } from './loginPage';
import { Browser } from '../common';
import { HomePage } from './public/HomePage';
import { TargetListDetailPage } from './public/targetListDetail';
import { NewsDetailPage } from './public/newsDetail';
import { CompanyDetailPage } from './public/companyDetail';
import { CompanyListPage } from './public/companyList';
import { NewsListPage } from './public/newsListPage';
import { ConnectsPage } from './public/connectsPage';
import { AlertSettingsPage } from './public/alertSettings';

export {
  ScoutAiSingInPage as ScoutAiLoginPage
};

export class AllPages {
  public scoutAiLoginPage: ScoutAiSingInPage;
  public homePage: HomePage;
  public targetListDetailPage: TargetListDetailPage;
  public newsDetailPage: NewsDetailPage;
  public companyDetailPage: CompanyDetailPage;
  public companyListPage: CompanyListPage;
  public newsListPage: NewsListPage;
  public connectsPage: ConnectsPage;
  public alertSettingsPage: AlertSettingsPage;

  constructor(public browser: Browser) {
    this.scoutAiLoginPage = new ScoutAiSingInPage(browser);
    this.homePage = new HomePage(browser);
    this.targetListDetailPage = new TargetListDetailPage(browser);
    this.newsDetailPage = new NewsDetailPage(browser);
    this.companyDetailPage = new CompanyDetailPage(browser);
    this.companyListPage = new CompanyListPage(browser);
    this.newsListPage = new NewsListPage(browser);
    this.connectsPage = new ConnectsPage(browser);
    this.alertSettingsPage = new AlertSettingsPage(browser);
  }

  public async dispose(): Promise<void> {
    await this.browser.close();
  }
}
