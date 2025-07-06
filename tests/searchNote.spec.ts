import { test, expect, request } from "@playwright/test";
import { NotesPage } from "./Pages/notesPage";

test.describe("Notes View", () => {
  let notesPage: NotesPage;
  const apiURL = "https://vw-digital-hub.vercel.app";
  const noteId = crypto.randomUUID();
  
  const createdNote = {
    id: noteId,
    title: "Note to select",
    content: "This is a note to select for testing.",
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

  test("search for a note", async () => {
    await notesPage.navigateToNotes();

    await notesPage.searchInput.fill(createdNote.title);
    await expect(notesPage.noteCardTitle(createdNote.id)).toHaveText(createdNote.title, {
      useInnerText: true,
    });
  });

  test("should not find a note that does not exist", async () => {
    await notesPage.navigateToNotes();

    const searchTerm = "non-existing note";
    await notesPage.searchInput.fill(searchTerm);
    await expect(notesPage.noteCardTitle(createdNote.id)).not.toBeVisible();
  });

  test("selecting a note should navigate to its view page", async () => {
    await notesPage.navigateToNotes();
    await notesPage.searchInput.fill(createdNote.title);
    
    await notesPage.selectNoteCard(createdNote.id);
    await expect(notesPage.page.url()).toMatch(`/notes/${createdNote.id}/view`)
  });
});


