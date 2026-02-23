// exercise2.js

const tagInput = document.querySelector('#tag-input');
const tagContainer = document.querySelector('#tag-container');

// -- Add a tag when Enter is pressed --
tagInput.addEventListener('keydown', function (event) {
    if (event.key !== 'Enter') return;

    const value = tagInput.value.trim();
    if (!value) return;

// 1. Create a div with class "tag"
    const tag = document.createElement('div');
    tag.classList.add('tag');   
// 2. Set its innerHTML to include the label text
// and a <span class="tag-remove">&times;</span>

    tag.innerHTML = `${value} <span class="tag-remove">&times;</span>`;

// 3. Append the tag to tagContainer
    tagContainer.appendChild(tag);

// 4. Clear the input
    tagInput.value = '';
});

// -- Remove a tag via delegation --

tagContainer.addEventListener('click', function (event) {
  // Use matches() to confirm remove button
    if (!event.target.matches('.tag-remove')) return;

  // Remove the entire tag
    const tag = event.target.closest('.tag');
    if (tag) {
        tag.remove();
    }
});