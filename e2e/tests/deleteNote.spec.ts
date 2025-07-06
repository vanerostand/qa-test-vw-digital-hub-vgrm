import { test, expect, request } from "@playwright/test";
import { NotesPage } from "./Pages/notesPage";

test.describe("Delete Note", () => {
  let notesPage: NotesPage;
  const apiURL = "http://localhost:3004";

  const noteId = crypto.randomUUID();
  const createdNote = {
    id: noteId,
    title: "Note to delete",
    content: "Content of the note to delete",
  };

  test.beforeEach(async ({ page }) => {
    notesPage = new NotesPage(page);

    const apiContext = await request.newContext();
    const response = await apiContext.post(`${apiURL}/notes`, {
      data: createdNote,
    });

    expect(response.ok()).toBeTruthy();
  });

  test.afterEach(async ({}) => {
    const apiContext = await request.newContext();
    await apiContext.delete(`${apiURL}/notes/${noteId}`);
  });

  test("should delete a note", async () => {
    await notesPage.navigateToNotes();
    await notesPage.searhcInputFill(createdNote.title);

    await notesPage.deleteIconClick(createdNote.id);
    await expect(notesPage.deleteDialog).toBeVisible();
    await notesPage.deleteButton.click();
    await expect(
      notesPage.page.getByText("Note deleted successfully")
    ).toBeVisible({ timeout: 5000 });

    await notesPage.navigateToNotes();
    await notesPage.searhcInputFill(createdNote.title);

    await expect(notesPage.noteCardTitle(createdNote.id)).not.toBeVisible();
  });

  test("should cancel note deletion", async () => {
    await notesPage.navigateToNotes();

    await notesPage.searhcInputFill(createdNote.title);

    await notesPage.deleteIconClick(createdNote.id);
    await expect(notesPage.deleteDialog).toBeVisible();
    await notesPage.cancelButton.click();
    await expect(notesPage.deleteDialog).not.toBeVisible();
  });
});