# Test Cases Document

---

## Author: Vanesa Rostand

---

### Test Case 001

**Title:** Create a note with valid data  
**Test Type:** Functional  
**Priority:** High  

**Steps:**

1. Open the application.
2. Click on the “Notes” menu.
3. Click on the "Add" icon.
4. Fill all the required fields.
5. Click on the “Save” button.  

**Expected Results:**  

A new note will be created successfully.
A message will be displayed indicating that the note has been created successfully.

---

### Test Case 002

**Title:** Create a note with empty data
**Test Type:** Functional
**Priority:** High

**Steps:**

1. Open the application.
2. Click on the “Notes” menu.
3. Click on the "Add" icon.
4. Leave at least one required field empty.
5. Attempt to click on the “Save” button.

**Expected Results:**

The "Save" button will be disabled until all required fields are filled.

---

### Test Case 003

**Title:** Edit a note.
**Test Type:** Functional
**Priority:** Medium

**Steps:**

1. Open the application.
2. Click on the “Notes” menu.
3. Choose an existing note.
4. Click on the "Edit" icon located on the upper left corner of the note.
5. Update the note title and/or content.
6. Click on the “Save” button.

**Expected Results:**

The note will be updated successfully.
A message will be displayed indicating that the note has been updated successfully.

---

### Test Case 004

**Title:** Cancel edition.
**Test Type:** Functional
**Priority:** Medium

**Steps:**

1. Open the application.
2. Click on the “Notes” menu.
3. Choose an existing note.
4. Click on the "Edit" icon located on the upper left corner of the note.
5. Update the note title and/or content.
6. Click on the “Cancel” button.

**Expected Results:**

The note will not be updated and will remain unchanged.

---

### Test Case 005

**Title:** Delete a note.
**Test Type:** Functional
**Priority:** Medium

**Steps:**

1. Open the application.
2. Click on the “Notes” menu.
3. Choose an existing note.
4. Click on the "Delete" icon located on the upper right corner of the note.
5. A confirmation dialog will appear.
6. Confirm the deletion by clicking on the "Delete" option.

**Expected Results:**

The note will be deleted successfully.
A message will be displayed indicating that the note has been deleted successfully.

---

### Test Case 006

**Title:** Cancel deletion.
**Test Type:** Functional
**Priority:** Medium
**Steps:**

1. Open the application.
2. Click on the “Notes” menu.
3. Choose an existing note.
4. Click on the "Delete" icon located on the upper right corner of the note.
5. A confirmation dialog will appear.
6. Cancel the deletion by clicking on the "Cancel" option.

**Expected Results:**

The note will not be deleted.
The dialog will close without any changes made to the note.

---

### Test Case 007

**Title:** Search for a note by title.
**Test Type:** Functional
**Priority:** Medium

**Steps:**

1. Open the application.
2. Click on the “Notes” menu.
3. Type a keyword or phrase in the search bar.

**Expected Results:**

The application will progressively show the notes whose title match the search keyword or phrase typed in the search bar.
If no notes match the search keyword or phrase, no note will be displayed.

---

### Test Case 008

**Title:** Sort notes by title asc/desc.
**Test Type:** Functional
**Priority:** Medium

**Steps:**

1. Open the application.
2. Click on the “Notes” menu.
3. Click on the "Sort" icon.
4. Choose to sort by title in ascending or descending order.

**Expected Results:**

The application will sort the notes by title in the selected order (ascending or descending).

---

### Test Case 009

**Title:** Show note details when selected.
**Test Type:** Functional
**Priority:** Medium

**Steps:**

1. Open the application.
2. Click on the “Notes” menu.
3. Click on a note to select it.

**Expected Results:**

The application will display the details of the selected note on a different view, including all the data associated with the note: title and content.

---

### Test Case 010

**Title:** Title length validation.
**Test Type:** Functional
**Priority:** Medium

**Steps:**

1. Open the application.
2. Click on the “Notes” menu.
3. Click on the "Add" icon.
4. Enter a title that exceeds the maximum allowed length.
5. Attempt to save the note.

**Expected Results:**

An error message will be displayed indicating that the title exceeds the maximum allowed length.
The "Save" button should be disabled until the title is within the allowed length.

---

### Test Case 011

**Title:** Content length validation.
**Test Type:** Functional
**Priority:** Medium

**Steps:**

1. Open the application.
2. Click on the “Notes” menu.
3. Click on the "Add" icon.
4. Enter content that exceeds the maximum allowed length.
5. Attempt to save the note.

**Expected Results:**

An error message will be displayed indicating that the content exceeds the maximum allowed length.
The "Save" button should be disabled until the content is within the allowed length.

---

### Test Case 012

**Title:** Validate note creation with special characters in title.
**Test Type:** Functional
**Priority:** Low

**Steps:**

1. Open the application.
2. Click on the “Notes” menu.
3. Click on the "Add" icon.
4. Enter a title with special characters (e.g., @, #, $, %, etc.).
5. Attempt to save the note.

**Expected Results:**

An error message will be displayed indicating that the title contains invalid characters.
The "Save" button should be disabled until the title is corrected.

---

### Test Case 013

**Title:** Validate note creation with special characters in content.
**Test Type:** Functional
**Priority:** Low

**Steps:**

1. Open the application.
2. Click on the “Notes” menu.
3. Click on the "Add" icon.
4. Enter content with special characters (e.g., @, #, $, %, etc.).
5. Attempt to save the note.

**Expected Results:**

An error message will be displayed indicating that the content contains invalid characters.
The "Save" button should be disabled until the content is corrected.

---

### Test Case 014

**Title:** Responsiveness of the application.
**Test Type:** Functional
**Priority:** High

**Steps:**

1. Open the application on different devices (desktop, tablet, mobile).
2. Navigate to differet sections of the application.

**Expected Results:**

The layout should adjust appropriately for different screen sizes without losing functionality.

---

### Test Case 015

**Title:** Application performance under load.
**Test Type:** Performance
**Priority:** High
**Steps:**

1. Open the application.
2. Simulate multiple users accessing the application simultaneously.

**Expected Results:**

The application should remain responsive and functional without significant delays or crashes.

---

### Test Case 016

**Title:** Text formatting in notes.
**Test Type:** Functional
**Priority:** Medium

**Steps:**

1. Open the application.
2. Click on the “Notes” menu.
3. Click on the "Add" or "Edit" icon.
4. Enter or edit text in the note content field.
5. Apply different text formatting options (bullet points, spacing, line break, etc.).

**Expected Results:**

The text formatting options should apply correctly to the note content.

---

### Test Case 017

**Title:** Redirect to home page when clicking on the application logo.
**Test Type:** Functional
**Priority:** Medium

**Steps:**

1. Open the application.
2. Click on the application logo located in the header.

**Expected Results:**

The application should redirect to the home page successfully.

---

### Test Case 018

**Title:** Navigate to the "Notes" section.
**Test Type:** Functional
**Priority:** Medium

**Steps:**

1. Open the application.
2. Click on the "Notes" menu in the navigation bar.

**Expected Results:**

The application should navigate to the "Notes" section successfully, displaying the list of notes.

---

### Test Case 019

**Title:** Navigate to the "Home" section.
**Test Type:** Functional
**Priority:** Medium

**Steps:**

1. Open the application.
2. Click on the "Home" menu in the navigation bar.

**Expected Results:**

The application should navigate to the "Home" section successfully, displaying the home page content.
