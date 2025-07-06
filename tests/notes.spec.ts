import { test, expect, request } from "@playwright/test";
import { NotesPage } from "./Pages/notesPage";

test.describe("Notes Page", () => {
  let notesPage: NotesPage;

  test.beforeEach(async ({ page }) => {
    notesPage = new NotesPage(page);
  });

  test("should display the notes page", async () => {
    await notesPage.navigateToNotes();
    await expect(notesPage.page).toHaveURL("/notes");
  });
});
