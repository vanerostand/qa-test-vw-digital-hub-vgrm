import { Locator, type Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly homePageTitle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.homePageTitle = page.getByRole('heading', { name: 'VW Digital Hub' });
  }

  async navigateToHome() {
    await this.page.goto('/');
  }
}