import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOps";

const contactsSlice = createSlice({
  name: "contact",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
        // state.error = false;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        // state.error = true;
        state.error = action.payload;
      })
      // Додавання контакту
      .addCase(addContact.pending, (state) => {
        state.loading = true;
        // state.error = false;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.loading = false;
        // state.error = true;
        state.error = action.payload;
      })
      // Видалення контакту
      .addCase(deleteContact.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        const indexContact = state.items.findIndex(
          (contact) => contact.id === action.payload.id
        );
        state.items.splice(indexContact, 1);
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.loading = false;
        // state.error = true;
        state.error = action.payload;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;

// export const selectContactsIsLoading = (state) => state.contactsSlice.loading;
const selectContacts = (state) => state.contacts.items;
const selectNameFilter = (state) => state.filters.name;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
