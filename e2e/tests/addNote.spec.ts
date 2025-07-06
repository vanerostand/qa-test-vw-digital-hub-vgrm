import { test, expect } from "@playwright/test";
import { NotesPage } from "./Pages/notesPage";

test.describe("Add Notes", () => {
  let notesPage: NotesPage;

  test.beforeEach(async ({ page }) => {
    notesPage = new NotesPage(page);
  });

  test("should allow adding a new note", async () => {
    const noteTitle = 'Test Note Title';
    const noteContent = 'This is a test note description.';

    await notesPage.navigateToNotes();
    await notesPage.addNoteButtonClick();
    await expect(notesPage.page).toHaveURL('/notes/new');

    await notesPage.fillTitle(noteTitle);
    await notesPage.fillContent(noteContent);

    await expect(notesPage.saveButton, 'The button is disabled').toBeEnabled();

    await notesPage.saveButton.click();
    await expect(notesPage.saveButton, 'The button is enabled').toBeDisabled();
  });

  test("should not allow saving without title", async () => {
    await notesPage.navigateToNotes();
    await notesPage.addNoteButtonClick();
    await expect(notesPage.page).toHaveURL('/notes/new');

    await notesPage.fillContent('This note has no title.');
    await expect(notesPage.saveButton, 'The button is enabled').toBeDisabled();
  });

  test("should not allow saving without content", async () => {
    await notesPage.navigateToNotes();
    await notesPage.addNoteButtonClick();
    await expect(notesPage.page).toHaveURL('/notes/new');

    await notesPage.fillTitle('This note has no content.');
    await expect(notesPage.saveButton, 'The button is enabled').toBeDisabled();
  });
});