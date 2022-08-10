import { Browser, delay, ensure } from "../common";
import { AllPages } from "../pages";
import { expect } from 'chai';

describe('Flash Test Core', () => {
  let pages: AllPages;
  before(async () => {
    pages = new AllPages(new Browser('chrome'));
  });

  it('Log in App.scoutAi system', async () => {
    await pages.scoutAiLoginPage.navigate();
    await pages.scoutAiLoginPage.signIn();
  });

  describe('Company Search 1', async () => {
    it('Go to search company page', async () => {
      await pages.companyListPage.navigate();
      await Promise.all([
        ensure(pages.companyListPage.firstCompaniesItem).isVisible()
      ]);
    })

    it('Search companies by "Sectors"', async () => {
      await pages.companyListPage.openCompanySectors();
      await pages.companyListPage.selectAllOilGasOnSectors();
      await pages.companyListPage.selectAllBasicMaterialsOnSectors();
      await pages.companyListPage.selectAllIndustrialsOnSectors();
      await pages.companyListPage.selectAllConsumerGoodsOnSectors();
      await pages.companyListPage.selectAllHealthCareOnSectors();
      await pages.companyListPage.selectAllSocialGovernmentOnSectors();
      await pages.companyListPage.selectAllConsumerServicesOnSectors();
      await pages.companyListPage.selectAllTelecommunicationOnSectors();
      await pages.companyListPage.selectAllUtilitiesOnSectors();
      await pages.companyListPage.selectAllFinancialsOnSectors();
      await pages.companyListPage.selectAllTechnologyOnSectors();
      await Promise.all([
        ensure(pages.companyListPage.sectorsSelected).textIs('41 selected')
      ]);
    });

    it('Search companies by "Business Lines"', async () => {
      await pages.companyListPage.selectBusinessLines();
      await Promise.all([
        ensure(pages.companyListPage.firstCompaniesItem).isVisible()
      ]);
    });

    it('Search companies by "Countries & regions"', async () => {
      await pages.companyListPage.selectCountriesRegions();
      await Promise.all([
        ensure(pages.companyListPage.firstCompaniesItem).isVisible()
      ]);
      await pages.newsListPage.clickRemoveFilter();
    });

    it('Search companies by "Financials"', async () => {
      await pages.companyListPage.selectFinancials();
      await Promise.all([
        ensure(pages.companyListPage.firstCompaniesItem).isVisible()
      ]);
      await pages.newsListPage.clickRemoveFilter();
    });

    it('Search companies by "Ownership"', async () => {
      await pages.companyListPage.selectOwnership();
      await Promise.all([
        ensure(pages.companyListPage.firstCompaniesItem).isVisible()
      ]);
    });

    it('Search companies by "No. Employees"', async () => {
      await pages.companyListPage.selectNoEmployees();
      await Promise.all([
        ensure(pages.companyListPage.firstCompaniesItem).isVisible()
      ]);
    });

    it('Save the search', async () => {
      await pages.companyListPage.saveCompanySearch();
      await Promise.all([
        ensure(pages.companyListPage.firstSavedSearchItem).isVisible()
      ]);
    });

    it('Add one company to a new target list', async () => {
      await pages.companyListPage.addCompanyToNewTargetList();
      await Promise.all([
        ensure(pages.companyListPage.firstCompaniesItem).isVisible()
      ]);
    })
  });

  describe('Company Search 2', async () => {
    it('Go to search company page', async () => {
      await pages.companyListPage.navigate();
      await Promise.all([
        ensure(pages.companyListPage.firstCompaniesItem).isVisible()
      ]);
    });

    it('Filter a specific Sector on company', async () => {
      await pages.companyListPage.navigate();
      await pages.companyListPage.openCompanySectors();
      await pages.companyListPage.selectSpecificOnSectors();
      await Promise.all([
        ensure(pages.companyListPage.firstCompaniesItem).isVisible()
      ]);
      await pages.newsListPage.clickRemoveFilter();
    });

    it('Filter a specific Business Line', async () => {
      await pages.companyListPage.navigate();
      await pages.companyListPage.searchBusinessLineAndSelectSpecific();
      await Promise.all([
        ensure(pages.companyListPage.firstCompaniesItem).isVisible()
      ]);
      await pages.newsListPage.clickRemoveFilter();
    });

    it('Filter multiple Business Lines & Sectors', async () => {
      await pages.companyListPage.navigate();
      await pages.companyListPage.openCompanySectors();
      await pages.companyListPage.selectSpecificOnSectors();
      await pages.companyListPage.selectSpecificOnBusinessLines();
      await Promise.all([
        ensure(pages.companyListPage.firstCompaniesItem).isVisible()
      ]);
      await pages.newsListPage.clickRemoveFilter();
    });
  });

  describe('Company Search 3', async () => {
    it('Go to search company page', async () => {
      await pages.companyListPage.navigate();
      await Promise.all([
        ensure(pages.companyListPage.firstCompaniesItem).isVisible()
      ]);
      await pages.newsListPage.clickRemoveFilter();
    });

    it('Select multiple values in a single filter', async () => {
      await pages.companyListPage.selectCountriesRegions();
      await Promise.all([
        ensure(pages.companyListPage.firstCompaniesItem).isVisible()
      ]);
      await pages.newsListPage.clickRemoveFilter();
    });

    it('Save the search', async () => {
      await pages.companyListPage.saveCompanySearch();
      await Promise.all([
        ensure(pages.companyListPage.firstSavedSearchItem).isVisible()
      ]);
      await pages.newsListPage.clickRemoveFilter();
    });

    it('Add multiple companies to existing target lists', async () => {
      await pages.companyListPage.addMultipleCompaniesToExistingTargetList();
      await Promise.all([
        ensure(pages.companyListPage.firstTargetsItem).isVisible()
      ]);
      await pages.newsListPage.clickRemoveFilter();
    });
  });

  describe('Company Search 4', async () => {
    it('Go to search company page', async () => {
      await pages.companyListPage.navigate();
      await Promise.all([
        ensure(pages.companyListPage.firstCompaniesItem).isVisible()
      ]);
    });

    it('Open and run a saved search', async () => {
      await pages.companyListPage.openSavedSearch();
      await Promise.all([
        ensure(pages.companyListPage.firstCompaniesItem).isVisible()
      ]);
    });

    it('Check the company search table values match the company page', async () => {
      await Promise.all([
        ensure(pages.companyListPage.companiesFound).isVisible()
      ]);
    });
  });

  describe('Company Search 5', async () => {
    it('Go to search company page', async () => {
      await pages.companyListPage.navigate();
      await Promise.all([
        ensure(pages.companyListPage.firstCompaniesItem).isVisible()
      ]);
    });

    it('Use financial filters', async () => {
      await pages.companyListPage.useFinancialFilters();
      await Promise.all([
        ensure(pages.companyListPage.firstCompaniesItem).isVisible()
      ]);
      await pages.newsListPage.clickRemoveFilter();
    });

    it('Find a company making a loss', async () => {
      await pages.companyListPage.navigate();
      await pages.companyListPage.findCompanyIsLoss();
      await Promise.all([
        ensure(pages.companyListPage.firstCompaniesItem).isVisible()
      ]);
    })
  });

  describe('Intro Tool Tip', async () => {
    it('Delete all targets list on alert setting.', async () => {
      await pages.alertSettingsPage.navigate();
      await pages.alertSettingsPage.deleteAllTargetList();
      await Promise.all([
        ensure(pages.alertSettingsPage.notHaveTargetList).isVisible()
      ]);
    });

    it('Check behaviour of tool tip - first use', async () => {
      await pages.homePage.navigate();
      const isValid = await pages.homePage.checkBehaviourOfToolTip();
      expect(isValid).to.be.true;
    });
  });

  describe('News Search 1', async () => {
    it('Go to search news page', async () => {
      await pages.companyListPage.switchSearchNews();
      await Promise.all([
        ensure(pages.newsListPage.article).isVisible()
      ]);
    });

    it('Use the "Publication Date" filters', async () => {
      const count = await pages.newsListPage.articlesFoundCount.getText();
      const result = await pages.newsListPage.searchNewsByPublicationDate();
      expect(count).to.not.equal(result);
      await pages.newsListPage.clickRemoveFilter();
    });

    it('Use the "Source" filters', async () => {
      await pages.newsListPage.navigate();
      const count = await pages.newsListPage.articlesFoundCount.getText();
      const result = await pages.newsListPage.searchNewsBySource();
      const digestLength = (await pages.newsListPage.articleDigest.getText()).length;
      expect(count).to.not.equal(result);
      expect(digestLength).to.not.equal(0);
      await Promise.all([
        ensure(pages.newsListPage.articleCreatedAt).expectedStyle('font-size', '12px'),
        ensure(pages.newsListPage.articleCreatedAt).expectedStyle('font-family', 'MetricWeb, sans-serif'),
        ensure(pages.newsListPage.articleCreatedAt).expectedStyle('font-weight', '400'),
        ensure(pages.newsListPage.articleCreatedAt).expectedStyle('text-transform', 'uppercase'),
      ]);
      await pages.newsListPage.clickRemoveFilter();
    });

    it('Use the "Sectors" filters', async () => {
      await pages.companyListPage.navigate();
      await pages.companyListPage.switchSearchNews();
      await pages.newsListPage.articlesFoundCount.isDisplayed();
      const count = await pages.newsListPage.articlesFoundCount.getText();
      const result = await pages.newsListPage.searchNewsBySectors();
      expect(count).to.not.equal(result);
      await pages.newsListPage.clickRemoveFilter();
    });

    it('Use the "Scout Ai" filters', async () => {
      await pages.companyListPage.navigate();
      await pages.companyListPage.switchSearchNews();
      await pages.newsListPage.articlesFoundCount.isDisplayed();
      const count = await pages.newsListPage.articlesFoundCount.getText();
      await pages.newsListPage.clickRemoveFilter();
      const result = await pages.newsListPage.searchNewsByScoutAi();
      expect(count).to.not.equal(result);
      await pages.newsListPage.clickRemoveFilter();
    });

    it('Use the "Countries & regions" filters', async () => {
      await pages.companyListPage.navigate();
      await pages.companyListPage.switchSearchNews();
      await pages.newsListPage.articlesFoundCount.isDisplayed();
      const count = await pages.newsListPage.articlesFoundCount.getText();
      const result = await pages.newsListPage.searchNewsByCountriesRegions();
      expect(count).to.not.equal(result);
      await pages.newsListPage.clickRemoveFilter();
    });

    it('Use the "Companies" filters', async () => {
      await pages.newsListPage.navigate();
      const count = await pages.newsListPage.articlesFoundCount.getText();
      const result = await pages.newsListPage.searchNewsByCompanies();
      expect(count).to.not.equal(result);
      await pages.newsListPage.clickRemoveFilter();
    })
  });

  describe('News Search 2', async () => {
    it('Go to search news page', async () => {
      await pages.companyListPage.switchSearchNews();
      await Promise.all([
        ensure(pages.newsListPage.article).isVisible()
      ]);
    });

    it('Select multiple values in a filter', async () => {
      await pages.companyListPage.navigate();
      await pages.companyListPage.switchSearchNews();
      const count = await pages.newsListPage.articlesFoundCount.getText();
      const result = await pages.newsListPage.searchNewsBySectors();
      expect(count).to.not.equal(result);
      await pages.newsListPage.clickRemoveFilter();
    });
  });

  describe('News Search 3', async () => {
    it('Go to search news page', async () => {
      await pages.companyListPage.switchSearchNews();
      await Promise.all([
        ensure(pages.newsListPage.article).isVisible()
      ]);
    });

    it('Search for a company as a keyword', async () => {
      const count = await pages.newsListPage.articlesFoundCount.getText();
      const result = await pages.newsListPage.searchNewsByKeyword('NIKKEI ASIA');
      expect(count).to.be.not.equal(result);
    });

    it('Search for the company in mentions', async () => {
      const count = await pages.newsListPage.articlesFoundCount.getText();
      const result = await pages.newsListPage.searchNewsByCompanies();
      expect(count).to.be.not.equal(result);
    });
  });

  describe('Sector Pages', async () => {
    it('Go to search company page', async () => {
      await pages.companyListPage.navigate();
      await Promise.all([
        ensure(pages.companyListPage.firstCompaniesItem).isVisible()
      ]);
    });

    it('Navigate to and back from a company', async () => {
      await pages.companyListPage.openCompanySectors();
      await pages.companyListPage.selectSpecificOnSectors();
      await pages.companyListPage.goToCompanyDetail();
      await pages.companyDetailPage.backToResult();
      await Promise.all([
        ensure(pages.companyListPage.firstCompanyLink).isVisible()
      ]);
      await pages.newsListPage.clickRemoveFilter();
    });

    it('Add company to a target list', async () => {
      await delay(1000);
      await pages.companyListPage.addCompanyToTargetList();
      await delay(1000);
      await Promise.all([
        ensure(pages.companyListPage.firstTargetsItem).isVisible()
      ]);
    });

    it('Find and open a sector report')
  });

  describe('Target Lists 1', async () => {
    it('Open a target list and open a company from the list', async () => {
      await pages.homePage.navigate();
      await pages.homePage.goToTargetDetail();
      await pages.targetListDetailPage.goToCompanyDetailFromTargetDetail();
      await Promise.all([
        ensure(pages.companyDetailPage.description).isVisible()
      ]);
    });

    it('Check for news notifications on your target list', async () => {
      await pages.companyListPage.navigate();
      await pages.companyListPage.searchCompaniesByKeyword('Huawei');
      const isDisplayedTargets = await pages.companyListPage.addFirstPageCompaniesToTargetList();
      await pages.homePage.navigate();
      await pages.homePage.goToTargetDetail();
      const isDisplayedAlert = await pages.targetListDetailPage.checkAlerts();
      const isDisplayedViewAlerts = await pages.targetListDetailPage.hasViewAlerts();
      expect(isDisplayedTargets).to.be.true;
      expect(isDisplayedAlert).to.be.true;
      expect(isDisplayedViewAlerts).to.be.true;
    });

  });

  describe('Target Lists 2', async () => {
    it('Add target list to email notifications')
    it('Check email digest reconciles to on-site notifications')
  });

  describe('Email Digest', async () => {
    it('Open an article from the digest email');
    it('Open a company mentioned in the digest/ articles');
  });
  describe('Check Download report', async () => {
    it('add a check to look at one counrty (singapore or japan) and download one EMIS and one ASHU report');
  });
  describe('Company Page 1', async () => {
    it('Samsung Electronics Co Ltd. I should not see the currency display in USD $0.00 & KRW W0.', async () => {
      const samsungURI = '1fe25e84-27a9-591c-a9ff-216d4294c39b';
      await pages.companyListPage.goToCompanyDetail(samsungURI);
      const usdMarketCap = await pages.companyDetailPage.marketCap.getText();
      const usdNumberPart = usdMarketCap.slice(1, -1);
      expect(usdNumberPart).to.not.equal('0.00');
      await pages.companyDetailPage.krw.click();
      const krwMarketCap = await pages.companyDetailPage.marketCap.getText();
      const krwNumberPart = krwMarketCap.slice(1, -1);
      expect(krwNumberPart).to.not.equal('0.00');
    });

    it('Toyota Motor Corp. I should not see the currency display in USD $0.00 & JPY W0.', async () => {
      const toyotaURI = '2c5d7d53-2174-516f-b811-1239b2a37e39';
      await pages.companyListPage.goToCompanyDetail(toyotaURI);
      const usdMarketCap = await pages.companyDetailPage.marketCap.getText();
      const usdNumberPart = usdMarketCap.slice(1, -1);
      expect(usdNumberPart).to.not.equal('0.00');
      await pages.companyDetailPage.jpy.click();
      const jpyMarketCap = await pages.companyDetailPage.marketCap.getText();
      const jpyNumberPart = jpyMarketCap.slice(1, -1);
      expect(jpyNumberPart).to.not.equal('0.00');
      await pages.newsListPage.clickRemoveFilter();
    });

    it('Check info bar, basic financials & Company news for', async () => {
      await pages.companyListPage.navigate();
      await Promise.all([
        ensure(pages.companyDetailPage.firstCompaniesItem).isVisible(),
      ]);
    });

    it('BvD company (e.g.: The Government Of The Hong Kong Special Administrative Region)', async () => {
      await pages.companyListPage.navigate();
      await pages.companyListPage.searchCompaniesByKeyword('The Government Of The Hong Kong Special Administrative Region');
      await pages.companyListPage.goToCompanyDetail();
      await pages.companyDetailPage.awaitNews();
      await Promise.all([
        ensure(pages.companyDetailPage.financialTable).isVisible(),
        ensure(pages.companyDetailPage.companyNews).isVisible(),
      ]);
    });

    it('Creditsafe company (Toyota Finance Corporation)', async () => {
      await pages.companyListPage.navigate();
      await pages.companyListPage.searchCompaniesByKeyword('Toyota Finance Corporation');
      await pages.companyListPage.goToCompanyDetail();
      await pages.companyDetailPage.awaitNews();
      await Promise.all([
        ensure(pages.companyDetailPage.financialTable).isVisible(),
        ensure(pages.companyDetailPage.companyNews).isVisible(),
      ]);
    });

    it('Factset company (Mitsui & Co Ltd)', async () => {
      await pages.companyListPage.navigate();
      await pages.companyListPage.searchCompaniesByKeyword('Mitsui & Co Ltd');
      await pages.companyListPage.goToCompanyDetail();
      await pages.companyDetailPage.awaitNews();
      await Promise.all([
        ensure(pages.companyDetailPage.financialTable).isVisible(),
        ensure(pages.companyDetailPage.companyNews).isVisible(),
      ]);
    });

    it('Venture Intelligence (Tamilnadu Generation And Distribution Corporation Limited)', async () => {
      await pages.companyListPage.navigate();
      await pages.companyListPage.searchCompaniesByKeyword('Tamilnadu Generation And Distribution Corporation Limited');
      await pages.companyListPage.goToCompanyDetail();
      await pages.companyDetailPage.awaitNews();
      await Promise.all([
        ensure(pages.companyDetailPage.financialTable).isVisible(),
        ensure(pages.companyDetailPage.companyNews).isVisible(),
      ]);
      await pages.newsListPage.clickRemoveFilter();
    });
  });

  describe('Company Page 2', async () => {
    it('Check Graph & Detailed Financials for, each currency for', async () => {
      await pages.companyListPage.navigate();
      await Promise.all([
        ensure(pages.companyDetailPage.firstCompaniesItem).isVisible(),
      ]);
    });

    it('Japanese Listed company (Toyota Corp)', async () => {
      await pages.companyListPage.navigate();
      await pages.companyListPage.searchCompaniesByKeyword('Toyota Corp');
      await pages.companyListPage.goToCompanyDetail();
      await pages.companyDetailPage.switchCurrencyByJPY();
      await Promise.all([
        ensure(pages.companyDetailPage.financialTable).isVisible(),
        ensure(pages.companyDetailPage.jpyUnit).isVisible(),
      ]);
    });
    it('Listed Company - (Factset concorded e.g Tata Steel or Tencent)', async () => {
      await pages.companyListPage.navigate();
      await pages.companyListPage.searchCompaniesByKeyword('Tata Steel');
      await pages.companyListPage.goToCompanyDetail();
      await pages.companyDetailPage.switchCurrencyByINR();
      await Promise.all([
        ensure(pages.companyDetailPage.financialTable).isVisible(),
        ensure(pages.companyDetailPage.inrUnit).isVisible(),
      ]);
    });
    it('Venture Intelligence Concorded Company (e.g State Bank Of India)', async () => {
      await pages.companyListPage.navigate();
      await pages.companyListPage.searchCompaniesByKeyword('State Bank Of India');
      await pages.companyListPage.goToCompanyDetail();
      await pages.companyDetailPage.switchCurrencyByINR();
      await Promise.all([
        ensure(pages.companyDetailPage.financialTable).isVisible(),
        ensure(pages.companyDetailPage.inrUnit).isVisible(),
      ]);
    });
  });

  describe('Company Page 3', async () => {
    it('Check News Mentions Graph for default, YTD, Max', async () => {
      await pages.companyListPage.navigate();
      await pages.companyListPage.searchCompaniesByKeyword('State Bank Of India');
      await pages.companyListPage.goToCompanyDetail();
      await pages.companyDetailPage.switchNewsChartDate();
      await Promise.all([
        ensure(pages.companyDetailPage.newsMentions).isVisible(),
      ]);
    });
  });

  describe('Company Page News 1', async () => {
    it('Check a company that has news directly about itself - and that it is mentioned in the article(s)', async () => {
      await pages.companyListPage.navigate();
      await pages.companyListPage.searchCompaniesByKeyword('Huawei');
      await pages.companyListPage.goToCompanyDetail();
      await pages.companyDetailPage.viewAllNews();
      await Promise.all([
        ensure(pages.newsListPage.article).isVisible()
      ]);
    });
  });

  describe('Company Page News 2', async () => {
    it('Check a subsidiary company that has news about its Group - and that it is mentioned in the article(s)', async () => {
      await pages.companyListPage.navigate();
      await pages.companyListPage.searchCompaniesByKeyword('Walt Disney Company (southeast Asia) Pte. Limited');
      await pages.companyListPage.goToCompanyDetail();
      await pages.companyDetailPage.goToNewsDetail();
      await Promise.all([
        ensure(await pages.newsDetailPage.menitons()).isVisible()
      ]);
    });
  });

  describe('Article Page', async () => {
    it('Check mentions, source data, copyright line.', async () => {
      await pages.companyListPage.navigate();
      await pages.companyListPage.switchSearchNews();
      await Promise.all([
        ensure(pages.newsListPage.article).isVisible()
      ]);
    })

    it('NAR articles (Nikkei Asia)', async () => {
      await pages.companyListPage.navigate();
      await pages.companyListPage.switchSearchNews();
      await pages.newsListPage.searchNewsBySourceNikkei();
      await pages.newsListPage.goToNewsDetail();
      await Promise.all([
        ensure(await pages.newsDetailPage.getNikkeiASIA()).isVisible()
      ]);
    });

    it('FT articles - locked and unlocked', async () => {
      await pages.companyListPage.navigate();
      await pages.companyListPage.switchSearchNews();
      await pages.newsListPage.searchNewsBySourceFinancialTimes();
      await Promise.all([
        ensure(pages.newsListPage.theLock).isVisible()
      ]);
    });

    it('Telecom articles from multiple publishers - South China Morning Post', async () => {
      await pages.companyListPage.navigate();
      await pages.companyListPage.switchSearchNews();
      await pages.newsListPage.searchNewsBySourceSouthChinaMorningPost();
      await pages.newsListPage.goToNewsDetail();
      await Promise.all([
        ensure(await pages.newsDetailPage.getSouthChinaMorningPost()).isVisible()
      ]);
    });
  });

  describe('News - open article page', async () => {
    it('Check that a locked FT article opens in a new tab', async () => {
      await pages.companyListPage.navigate();
      await pages.companyListPage.switchSearchNews();
      await pages.newsListPage.searchNewsBySourceFinancialTimes();
      await Promise.all([
        ensure(pages.newsListPage.theLock).isVisible()
      ]);
    });

    it('Check that an unlocked FT article opens within the scout app', async () => {
      await pages.companyListPage.navigate();
      await pages.companyListPage.switchSearchNews();
      await pages.newsListPage.searchNewsBySourceFinancialTimes();
      await pages.newsListPage.searchNewsByKeyword('Chinese entertainment stocks: ban on celebrity ranking leaves fan culture idle');
      await pages.newsListPage.goToNewsDetail();
      await Promise.all([
        ensure(pages.newsDetailPage.newsTitle).isVisible()
      ]);
    });
  });

  describe('Connection Map 1', async () => {
    it('Open the connection map from a Japanese listed company page (Honda Motor Co Ltd)', async () => {
      await pages.companyListPage.navigate();
      await pages.companyListPage.searchCompaniesByKeyword('Honda Motor Co Ltd');
      await pages.companyListPage.goToCompanyDetail();
      await pages.companyDetailPage.goToConnections();
      await Promise.all([
        ensure(pages.companyDetailPage.operationalStructure).isVisible()
      ]);
    });

    it('Navigate to the company details page of a subsidiary');
  });

  describe('Connection Map 2', async () => {
    it('Open the connection map from a concorded company page (e.g Pertamina, pt (persero)', async () => {
      await pages.companyListPage.navigate();
      await pages.companyListPage.searchCompaniesByKeyword('Pertamina, pt (persero)');
      await pages.companyListPage.goToCompanyDetail();
      await pages.companyDetailPage.goToConnections();
      await Promise.all([
        ensure(pages.companyDetailPage.operationalStructure).isVisible()
      ]);
    });

    it('Within the above connection map, navigate to the company details page of a parent/ ultimate parent');
  });

  describe('Alerts page', async () => {
    it('Navigate to and open alerts setting page', async () => {
      await pages.alertSettingsPage.navigate();
      await Promise.all([
        ensure(pages.alertSettingsPage.loadScoutAI).isVisible()
      ]);
    });

    it('Delete a Saved Search', async () => {
      await pages.alertSettingsPage.switchSavedSearchTab();
      const startName = await pages.alertSettingsPage.getFirstItemName();
      const endName = await pages.alertSettingsPage.deleteSavedSearchItem();
      expect(startName).to.be.not.equal(endName);
    });

    it('Turn on site alerts and email alerts on and off for a Saved Search', async () => {
      await pages.alertSettingsPage.changeOnSiteAndEmailDigest();
    });

    it('Delete a Target List', async () => {
      await pages.companyListPage.navigate();
      await pages.companyListPage.addFirstPageCompaniesToTargetList();
      await pages.alertSettingsPage.navigate();
      await pages.alertSettingsPage.switchTargetListTab();
      await pages.alertSettingsPage.deleteAllTargetList();
      await Promise.all([
        ensure(pages.alertSettingsPage.notHaveTargetList).isVisible()
      ]);
    });

    it('Turn on site alerts and email alerts on and off for a Target List', async () => {
      await pages.companyListPage.navigate();
      await pages.companyListPage.addFirstPageCompaniesToTargetList();
      await pages.alertSettingsPage.navigate();
      await pages.alertSettingsPage.switchTargetListTab();
      await pages.alertSettingsPage.changeTargetListOnSiteAndEmailDigest();
    })
  });

  describe('Connections+', async () => {
    it('Open the connections+ page and logout.', async () => {
      await pages.homePage.navigate();
      await pages.homePage.goToConnectionsPlus();
      await pages.homePage.logout();
      await Promise.all([
        ensure(pages.scoutAiLoginPage.email).isVisible()
      ]);
    });
  });

  after(async () => {
    await pages.dispose();
  });
});