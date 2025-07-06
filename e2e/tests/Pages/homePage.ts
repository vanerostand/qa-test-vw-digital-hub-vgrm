import { Locator, type Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly homePageTitle: Locator;
  readonly logo: Locator;

  constructor(page: Page) {
    this.page = page;
    this.homePageTitle = page.getByRole('heading', { name: 'VW Digital Hub' });
    this.logo = page.getByRole('button', { name: 'home button' })
  }

  async navigateToHome() {
    await this.page.goto('/');
  }

  async clickLogo() {
    await this.logo.click();
  }
}