import { test, expect, request } from "@playwright/test";
import { NotesPage } from "./Pages/notesPage";

test.describe("Notes Edition", () => {
  let notesPage: NotesPage;
  const noteId = crypto.randomUUID();
  
  const createdNote = {
    id: noteId,
    title: "Note to edit",
    content: "This is a note to edit for testing.",
  };

  test.beforeEach(async ({ page }) => {
    notesPage = new NotesPage(page);

    const apiContext = await request.newContext();
    const response = await apiContext.post("http://localhost:3004/notes", {
      data: createdNote,
    });

    expect(response.ok()).toBeTruthy();
  });

  test.afterEach(async ({ }) => {
    const apiContext = await request.newContext();
    await apiContext.delete(`http://localhost:3004/notes/${noteId}`);
  });

  test("should edit a note", async () => {
    const noteTitleEdited = "Editable Note Title";
    const noteContentEdited = "This is an editable note description";

    await notesPage.navigateToNotes();
    await notesPage.searhcInputFill(createdNote.title);
    await expect(notesPage.noteCardTitle(createdNote.id)).toHaveText(createdNote.title, {
      useInnerText: true,
    });

    await notesPage.editIconByNoteId(createdNote.id);
    await expect(notesPage.page.url()).toMatch(`/notes/${createdNote.id}/edit`)

    await notesPage.fillTitle(noteTitleEdited);
    await notesPage.fillContent(noteContentEdited);
    await notesPage.saveButton.click();

    await notesPage.navigateToNotes();
    await notesPage.searhcInputFill(noteTitleEdited);

    await expect(notesPage.noteCardTitle(createdNote.id)).toHaveText(noteTitleEdited, {
      useInnerText: true,
    });
  });
});