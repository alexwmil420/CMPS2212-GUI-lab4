// exercise4.js

const editList = document.querySelector('#edit-list');

editList.addEventListener('dblclick', function (event) {

// 1. Find closest .edit-item from event.target; return if null
    const item = event.target.closest('.edit-item');
    if (!item) return;

// 2. Return early if item already has .editing class
    if (item.classList.contains('editing')) return;

// 3. Save original text, clear item, create and append input
    const originalText = item.textContent;

// 4. Set item.textContent to newText, remove .editing
    item.textContent = '';
    const input = document.createElement('input');
    input.value = originalText;
    item.appendChild(input);
    item.classList.add('editing');
    input.focus();

// -- Helper: commit the edit --
function commitEdit() {
    const newText = input.value.trim() || originalText;
    item.textContent = newText;
    item.classList.remove('editing');
  }

 // -- Helper: cancel the edit --
  function cancelEdit() {
     
    // 5. Restore originalText, remove .editing
    item.textContent = originalText;
    item.classList.remove('editing');
  }

 // 6. Listen for 'keydown' on input
 // Enter -> commitEdit()
 // Escape -> cancelEdit()
input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      commitEdit();
    }

    if (e.key === 'Escape') {
      cancelEdit();
    }
  });

 // 7. Listen for 'blur' on input -> commitEdit()
input.addEventListener('blur', function () {
    if (item.classList.contains('editing')) {
      commitEdit();
    }
  });

});