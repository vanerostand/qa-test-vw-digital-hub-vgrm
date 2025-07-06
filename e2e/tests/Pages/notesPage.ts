import { Locator, type Page } from '@playwright/test';

export class NotesPage {
  readonly page: Page;
  readonly notesMenuLink: Locator;
  readonly addNoteButton: Locator;
  readonly titleInput: Locator;
  readonly contentInput: Locator;
  readonly saveButton: Locator;
  readonly deleteDialog: Locator;
  readonly deleteButton: Locator;
  readonly cancelButton: Locator;
  readonly searchInput: Locator;
  readonly noteCardById: (noteId: string) => Locator;
  readonly noteCardTitle: (noteId: string) => Locator;
  readonly editButtonByNoteId: (id: string) => Locator;
  readonly deleteButtonByNoteId: (id: string) => Locator;

  constructor(page: Page) {
    this.page = page;
    this.notesMenuLink = page.getByRole('link', { name: 'Notes' })
    this.addNoteButton = page.getByRole('button', { name: 'new note button' });
    this.titleInput = page.getByRole('textbox', { name: 'Write the title here *' });
    this.contentInput = page.getByLabel('Write the note content here')
    this.saveButton = page.getByRole('button', { name: 'Save' });
    
    this.noteCardById = (noteId) => page.locator(`a[id='${noteId}']`);
    this.noteCardTitle = (noteId) => page.locator(`a[id='${noteId}'] h3`);
    this.editButtonByNoteId = (noteId) =>
      this.noteCardById(noteId).locator("button[aria-label='edit button']");
    this.deleteButtonByNoteId = (noteId) => this.noteCardById(noteId).locator("button[aria-label='delete button']");
    this.deleteDialog = page.getByRole('heading', { name: 'Deleting a note' });
    this.deleteButton = page.getByRole('button', { name: 'Delete', exact: true });
    this.cancelButton = page.getByRole('button', { name: 'Cancel' });
    this.searchInput = page.getByRole('textbox', { name: 'search' });
  }
  
  async navigateToNotes() {
    await this.page.goto('/notes');
  }

  async addNoteButtonClick() {
    await this.addNoteButton.click();
  }
  async fillTitle(title: string) {
    await this.titleInput.click();
    await this.titleInput.fill(title);
  }
  async fillContent(content: string) {
    await this.titleInput.click();
    await this.contentInput.fill(content);
  }
  async saveNote() {
    await this.saveButton.click();
  }

  async saveButtonIsEnabled() {
    const isEnabled = await this.saveButton.isEnabled();
    return isEnabled;
  }

  async editIconByNoteId(noteId: string) {
    await this.editButtonByNoteId(noteId).click();
  }

  async deleteIconClick(noteId: string) {
    await this.deleteButtonByNoteId(noteId).click();
  }

  async deleteButtonClick() {
    await this.deleteButton.click();
  }

  async cancelButtonClick() {
    await this.cancelButton.click();
  }

  async deleteDiaglogIsVisible() {
    const isVisible = await this.deleteDialog.isVisible();
    return isVisible;
  }

  async searhcInputFill(searchText: string) {
    await this.searchInput.fill(searchText);
    await this.searchInput.press('Enter');
  }

  async selectNoteCard(noteId: string) {
    await this.noteCardById(noteId).click();
  }

}