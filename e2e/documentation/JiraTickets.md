# Issues found and suggested improvements

## Jira Tickets

---

### JT-0001

**Title:** The notes should be displayed in a table format intead of a list.
**Description:** The current notes display is in a list format, which does not meet the table format requirement. A table format would allow for better organization and sorting of notes.

**Steps to Reproduce:**

  1. Open the application.
  2. Click on the “Notes” menu.
  3. Observe the current display format of the notes.

**Expected Result:** The notes should be displayed in a table format with columns for title, content, and actions (edit/delete).

**Actual Result:** The notes are displayed in a list format without the ability to sort or filter by columns and pagination.

**Priority:** High
**Status:** Open
**Labels:** enhancement, UI
***Comments to developer:***

- This issue is critical as the current format does not meet the functional requirements.
- Implementing a table format will allow users to easily view, sort, and manage their notes.

---

### JT-0002

**Title:** When deleting a note, the note list is not updated immediately.
**Description** After deleting a note, the note list does not refresh immediately to reflect the deletion.

**Steps to Reproduce:**

  1. Open the application.
  2. Click on the “Notes” menu.
  3. Choose the note to delete.
  4. Click on the "Delete" icon.
  5. Confirm the deletion by clicking on the "Delete" option.

**Expected Result:** The note should be automaticaly removed from the list immediately after deletion.

**Actual Result:** The note remains in the list until the application is refreshed.

**Priority:** Medium
**Status:** Open
**Labels:** bug, notes

***Comments to developer***

- This issue is affecting the user experience as users expect immediate feedback after deleting.

---

### JT-0003

**Title:** Note title field allows special characters.
**Description:** The note title field currently allows special characters, which can lead to confusion and inconsistency in note management.

**Steps to Reproduce:**

  1. Open the application.
  2. Click on the “Notes” menu.
  3. Click on the "Add" icon.
  4. Enter a title with special characters (e.g., @, #, $, %, etc.).
  5. Save the note.

**Expected Result:** The note title should only accept alphanumeric characters and spaces.

**Actual Result:** The note title accepts special characters without any validation.
**Priority:** Low
**Status:** Open
**Labels:** enhancement, notes

***Comments to developer:***

- This could lead to issues in searching and filtering notes.
- Consider implementing validation to restrict special characters in the title field.

---

## JT-0004

**Title:** Search by content does not return results.
**Description:** When searching for notes by content, the search functionality does not return any results even if the content exists in the notes.

**Steps to Reproduce:**

  1. Open the application.
  2. Click on the “Notes” menu.
  3. Enter a keyword in the search field that exists in the content of one or more notes.

**Expected Result:** The search should display all notes containing the keyword in their content.

**Actual Result:** The search returns no results, even if the keyword exists in the content of the notes.
**Priority:** High
**Status:** Open
**Labels:** bug, search

***Comments to developer:***

- This issue affects the usability of the notes feature.
- Please, look into the search functionality to ensure it retrieves notes based on their content.

---

### JT-0005

**Title:** Canceling a edition is not implemented.
**Description:** The application does not provide a way to cancel an ongoing note edition, which can lead to accidental changes being saved.

**Steps to Reproduce:**

  1. Open the application.
  2. Click on the “Notes” menu.
  3. Select a note to edit.
  4. Make changes to the note.
  5. Attempt to cancel the edition.

**Expected Result:** There should be a "Cancel" button that allows users to discard changes and return to the note list without saving.

**Actual Result:** There is no option to cancel the edition, forcing users to either save changes or click on the note menu.

**Priority:** Medium
**Status:** Open
**Labels:** enhancement, notes

***Comments to developer:***

- Implementing a cancel option will improve user experience and prevent accidental changes.
- Consider adding a confirmation dialog to prevent accidental cancellations.

---

### JT-0006

**Title:** Edit o delete actions are not available in the note view.
**Description:** The edit and delete actions are not available when a note is opened, which limits the user's ability to manage notes effectively.

**Steps to Reproduce:**

  1. Open the application.
  2. Click on the “Notes” menu.
  3. Select a note to open it.
  4. Observe that the edit and delete actions are not available.

**Expected Result:** The edit and delete actions should be available when a note is opened, allowing users to manage their notes directly.

**Actual Result:** The edit and delete actions are only available from the note list view, not when a note is opened.

**Priority:** Medium
**Status:** Open
**Labels:** enhancement, notes

***Comments to developer:***

- This limitation affects the usability of the notes feature.
- Consider implementing edit and delete options within the note view to enhance user experience.

---

### JT-0007

**Title:** Back button is not available when you open a note.
**Description:** When a note is opened, there is no back button to return to the notes list, which can lead to confusion and difficulty navigating the application.

**Steps to Reproduce:**

  1. Open the application.
  2. Click on the “Notes” menu.
  3. Select a note to open it.
  4. Observe that there is no back button to return to the notes list.

**Expected Result:** There should be a back button or a way to return to the notes list without having to close the note.

**Actual Result:** Users have to close the note to return to the notes list, which is not intuitive.

**Priority:** Medium
**Status:** Open
**Labels:** enhancement, navigation

***Comments to developer:***

- Implementing a back button will improve navigation and user experience.
- Consider adding a breadcrumb or a back button in the note view to allow users to easily return to the notes list.

---

### JT-0008

**Title:** The button to add a note is not intuitive.
**Description:** The button to add a new note is not clearly labeled or positioned because it is on the header, making it confusing for users to understand its function.

**Steps to Reproduce:**

  1. Open the application.
  2. Look for the "Add" icon located on the left side of the header.

**Expected Result:** The button to add a new note should be clearly labeled and only accessible from the notes list view, making it intuitive for users to create new notes.

**Actual Result:** The button is not clearly labeled, and it is seen from all of the pages since it is located on the header, therefore it is not intuitive.

**Priority:** Medium
**Status:** Open
**Labels:** enhancement, UI

***Comments to developer:***

- Consider updating the button to make it intuitive and only visible from the notes page.
- A clearer tool tip and an appropriate position will enhance user experience and encourage note creation.

---

### JT-0009

**Title:** After saving a note, the user is not redirected to the notes list.
**Description:** After saving a note, the application does not redirect the user back to the notes list.

**Steps to Reproduce:**

  1. Open the application.
  2. Click on the “Notes” menu.
  3. Click on the "Add" or "Edit" icon.
  4. Update the note details.
  5. Click on the "Save" button.

**Expected Result:** After saving, the user should be redirected to the notes list where the edited or created note is displayed.

**Actual Result:** The user remains on the note page after saving, which can lead to confusion.

**Priority:** Medium
**Status:** Open
**Labels:** enhancement, navigation
***Comments to developer:***

- Redirecting users to the notes list after saving a note will improve usability and workflow.

---

### JT-0010

**Title:** The application does not sort notes by any criteria.
**Description:** The current implementation does not provide any sorting options for the notes.

**Steps to Reproduce:**

  1. Open the application.
  2. Click on the “Notes” menu.
  3. Observe that there are no sorting options available for the notes.

**Expected Result:** The application should provide options to sort notes by title created.

**Actual Result:** There are no sorting options available, making it difficult to manage and find notes.

**Priority:** Low
**Status:** Open
**Labels:** enhancement, notes

***Comments to developer:***

- Implementing sorting options will enhance the usability of the notes feature.

---

### JT-0011

**Title:** Validation length for note title is not implemented.
**Description:** The application does not validate the length of the note title, allowing titles that exceed the maximum allowed length.

**Steps to Reproduce:**

  1. Open the application.
  2. Click on the “Notes” menu.
  3. Click on the "Add" icon.
  4. Enter a title that exceeds the maximum allowed length.
  5. Attempt to save the note.

**Expected Result:** The application should display an error message indicating that the title exceeds the maximum allowed length and disable the "Save" button until the title is within the allowed length.

**Actual Result:** The application allows saving notes with titles that exceed the maximum allowed length without any validation.

**Priority:** Medium
**Status:** Open
**Labels:** enhancement, validation

***Comments to developer:***

- Implementing title length validation will improve data integrity and user experience.

---

### JT-0012

**Title:** Validation length for note content is not implemented.
**Description:** The application does not validate the length of the note content, allowing content that exceeds the maximum allowed length.

**Steps to Reproduce:**

  1. Open the application.
  2. Click on the “Notes” menu.
  3. Click on the "Add" icon.
  4. Enter content that exceeds the maximum allowed length.
  5. Attempt to save the note.

**Expected Result:** The application should display an error message indicating that the content exceeds the maximum allowed length and disable the "Save" button until the content is within the allowed length.

**Actual Result:** The application allows saving notes with content that exceeds the maximum allowed length without any validation.

**Priority:** Medium
**Status:** Open
**Labels:** enhancement, validation

***Comments to developer:***

- Implementing content length validation will improve data integrity and user experience.

---

### JT-0013

**Title:** The note content is not formatted correctly.
**Description:** The content of the notes is not formatted correctly, leading to readability issues.

**Steps to Reproduce:**

  1. Open the application.
  2. Click on the “Notes” menu.
  3. Select a note to view its content.

**Expected Result:** The content of the note should be displayed with proper formatting, including line breaks and paragraphs.

**Actual Result:** The content is displayed as a single block of text without any formatting, making it difficult to read.

**Priority:** Low
**Status:** Open
**Labels:** enhancement, formatting

***Comments to developer:***

- Implementing proper formatting for note content will enhance readability and user experience.

---

### JT-0014

**Title:** Validation message in required fields is not displayed.
**Description:** The application does not display validation messages for required fields when the user loses focus on them without entering any data.
**Steps to Reproduce:**

  1. Open the application.
  2. Click on the “Notes” menu.
  3. Click on the "Add" icon.
  4. Leave the title and content fields empty and click outside of them.

**Expected Result:** The application should display validation messages indicating that the title and content fields are required.

**Actual Result:** No validation messages are displayed when the user leaves the required fields empty.
**Priority:** Medium
**Status:** Open
**Labels:** enhancement, validation

***Comments to developer:***

- Implementing validation messages for required fields will improve user experience and ensure that users are aware of the required data before saving a note.

---

### JT-0015

**Title:** Tool tips for the icons are not displayed.
**Description:** The application does not display tool tips for the icons, making it difficult for users to understand their functions.

**Steps to Reproduce:**

  1. Open the application.
  2. Mouse over the icons in the application header and in the notes list.

**Expected Result:** The application should display tool tips for each icon, providing a brief description of its function.

**Actual Result:** No tool tips are displayed when hovering over the icons.

**Priority:** Low
**Status:** Open
**Labels:** enhancement, UI

***Comments to developer:***

- Implementing tool tips for icons will enhance user experience by providing additional context and guidance on their functions.
