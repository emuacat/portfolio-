let notes = [];
let selectedNoteIndex = null;

function createNote() {
    const title = document.getElementById('note-title').value;
    const content = document.getElementById('note-content').value;
    notes.push({ title, content });
    clearForm();
    renderNotes();
}

function readNote(index) {
    selectedNoteIndex = index;
    document.getElementById('note-title').value = notes[index].title;
    document.getElementById('note-content').value = notes[index].content;
}

function updateNote() {
    if (selectedNoteIndex !== null) {
        const title = document.getElementById('note-title').value;
        const content = document.getElementById('note-content').value;
        notes[selectedNoteIndex] = { title, content };
        clearForm();
        renderNotes();
        selectedNoteIndex = null;
    }
}

function deleteNote(index) {
    notes.splice(index, 1);
    renderNotes();
}

function clearForm() {
    document.getElementById('note-title').value = '';
    document.getElementById('note-content').value = '';
}

function renderNotes() {
    const notesDiv = document.getElementById('notes');
    notesDiv.innerHTML = '';
    notes.forEach((note, index) => {
        const noteElement = document.createElement('div');
        noteElement.innerHTML = `
            <h2>${note.title}</h2>
            <p>${note.content}</p>
            <button onclick="readNote(${index})">Read</button>
            <button onclick="deleteNote(${index})">Delete</button>
        `;
        notesDiv.appendChild(noteElement);
    });
}

// Initial rendering of the notes
renderNotes();

let notes = JSON.parse(localStorage.getItem('notes')) || [];
let selectedNoteIndex = null;
let selectedCategory = 'All';

function createNote() {
    const title = document.getElementById('note-title').value;
    const content = document.getElementById('note-content').value;
    const category = document.getElementById('note-category').value;
    notes.push({ title, content, category });
    clearForm();
    saveNotes();
    renderNotes();
}

function readNote(index) {
    selectedNoteIndex = index;
    document.getElementById('note-title').value = notes[index].title;
    document.getElementById('note-content').value = notes[index].content;
    document.getElementById('note-category').value = notes[index].category;
}

function updateNote() {
    if (selectedNoteIndex !== null) {
        const title = document.getElementById('note-title').value;
        const content = document.getElementById('note-content').value;
        const category = document.getElementById('note-category').value;
        notes[selectedNoteIndex] = { title, content, category };
        clearForm();
        saveNotes();
        renderNotes();
        selectedNoteIndex = null;
    }
}

function deleteNote(index) {
    notes.splice(index, 1);
    saveNotes();
    renderNotes();
}

function clearForm() {
    document.getElementById('note-title').value = '';
    document.getElementById('note-content').value = '';
    document.getElementById('note-category').value = '';
}

function saveNotes() {
    localStorage.setItem('notes', JSON.stringify(notes));
}

function filterByCategory(category) {
    selectedCategory = category;
    renderNotes();
}

function searchNotes() {
    const searchTerm = document.getElementById('note-search').value.toLowerCase();
    const filteredNotes = notes.filter(
        (note) => note.title.toLowerCase().includes(searchTerm) || note.content.toLowerCase().includes(searchTerm)
    );
    render(filteredNotes);
}

function render(notesToRender) {
    const notesDiv = document.getElementById('notes');
    notesDiv.innerHTML = '';
    notesToRender.forEach((note, index) => {
        if (selectedCategory === 'All' || note.category === selectedCategory) {
            const noteElement = document.createElement('div');
            noteElement.innerHTML = `
                <h2>${note.title}</h2>
                <p>${note.content}</p>
                <p>Category: ${note.category}</p>
                <button onclick="readNote(${index})">Read</button>
                <button onclick="deleteNote(${index})">Delete</button>
            `;
            notesDiv.appendChild(noteElement);
        }
    });
}

function renderNotes() {
    render(notes);
}

// Initial rendering of the notes
renderNotes();
// Existing code ...

// A function to toggle the theme of the application
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}

// A function to sort notes by date or title
function sortNotes(criteria) {
    if (criteria === 'date') {
        // Assuming a date property in each note
        notes.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (criteria === 'title') {
        notes.sort((a, b) => a.title.localeCompare(b.title));
    }
    renderNotes();
}

// Modifying the createNote function to include favorites
function createNote() {
    // Existing code ...
    const favorite = document.getElementById('note-favorite').checked;
    notes.push({ title, content, category, favorite, date: new Date().toISOString() });
    // Existing code ...
}

// Modifying the readNote function to include favorites
function readNote(index) {
    // Existing code ...
    document.getElementById('note-favorite').checked = notes[index].favorite;
}

// Modifying the updateNote function to include favorites
function updateNote() {
    if (selectedNoteIndex !== null) {
        // Existing code ...
        const favorite = document.getElementById('note-favorite').checked;
        notes[selectedNoteIndex] = { title, content, category, favorite, date: notes[selectedNoteIndex].date };
        // Existing code ...
    }
}

// Modifying the render function to include favorites and categories
function render(notesToRender) {
    // Existing code ...
    const categoriesSet = new Set();
    notesToRender.forEach((note, index) => {
        categoriesSet.add(note.category);
        if ((selectedCategory === 'All' || note.category === selectedCategory) && (!note.favorite || showFavorites)) {
            const noteElement = document.createElement('div');
            noteElement.innerHTML = `
                <h2>${note.title}</h2>
                <p>${note.content}</p>
                <p>Category: ${note.category}</p>
                ${note.favorite ? '<p>🌟 Favorite</p>' : ''}
                <button onclick="readNote(${index})">Read</button>
                <button onclick="deleteNote(${index})">Delete</button>
            `;
            notesDiv.appendChild(noteElement);
        }
    });

    // Render categories for filtering
    const categoriesDiv = document.getElementById('categories');
    categoriesDiv.innerHTML = '<button onclick="filterByCategory(\'All\')">All</button>';
    categoriesSet.forEach((category) => {
        categoriesDiv.innerHTML += `<button onclick="filterByCategory('${category}')">${category}</button>`;
    });
}

// Existing code ...
