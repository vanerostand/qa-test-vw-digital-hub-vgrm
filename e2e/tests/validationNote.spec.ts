import { test, expect } from '@playwright/test';
import { NotesPage } from './Pages/notesPage';

test.describe('Validation Note', () => {
  let notesPage: NotesPage;

  test.beforeEach(async ({ page }) => {
    notesPage = new NotesPage(page);
  });

  test('validation length of title note', async () => {
    const noteTitle = 'A'.repeat(256); // 256 characters long title
    const noteContent = 'This is a test note description.';

    await notesPage.navigateToNotes();
    await notesPage.addNoteButtonClick();
    await expect(notesPage.page).toHaveURL('/notes/new');

    await notesPage.fillTitle(noteTitle);
    await notesPage.fillContent(noteContent);

    await expect(notesPage.saveButton, 'The button is enabled').toBeDisabled();
  });

  test('validation length of content note', async () => {
    const noteTitle = 'Test Note';
    const noteContent = 'A'.repeat(10001); // 1001 characters long content

    await notesPage.navigateToNotes();
    await notesPage.addNoteButtonClick();
    await expect(notesPage.page).toHaveURL('/notes/new');

    await notesPage.fillTitle(noteTitle);
    await notesPage.fillContent(noteContent);

    await expect(notesPage.saveButton, 'The button is enabled').toBeDisabled();
  });

  test('invalid characters in title note', async () => {
    const noteTitle = 'Invalid Title @#$%^&*()';
    const noteContent = 'This is a test note description.';

    await notesPage.navigateToNotes();
    await notesPage.addNoteButtonClick();
    await expect(notesPage.page).toHaveURL('/notes/new');

    await notesPage.fillTitle(noteTitle);
    await notesPage.fillContent(noteContent);

    await expect(notesPage.saveButton, 'The button is enabled').toBeDisabled();
  });

  test('invalid characters in content note', async () => {
    const noteTitle = 'Test Note';
    const noteContent = 'Invalid Content @#$%^&*()';

    await notesPage.navigateToNotes();
    await notesPage.addNoteButtonClick();
    await expect(notesPage.page).toHaveURL('/notes/new');

    await notesPage.fillTitle(noteTitle);
    await notesPage.fillContent(noteContent);

    await expect(notesPage.saveButton, 'The button is enabled').toBeDisabled();
  });
});