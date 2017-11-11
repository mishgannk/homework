function makeNote(note_obj) {
    let note = document.createElement('div');
    note.classList.add('note');
    note.classList.add(note_obj.color);

    if(note_obj.image){
        let note_cont_img = document.createElement('div')
        note_cont_img.classList.add('cont_img')


        let note_img = document.createElement('img')
        note_img.classList.add('img')
        note_img.src = note_obj.image

        note_cont_img.appendChild(note_img)
        note.appendChild(note_cont_img)
    }

    let note_contents = document.createElement('div')
    note_contents.classList.add('note-contents')

    let header = document.createElement('div')
    header.classList.add('header')
    header.textContent = note_obj.title

    let actions = document.createElement('div')
    actions.classList.add('actions')
    actions.textContent = 'Actions'

    let content = document.createElement('div')
    content.classList.add('content')
    content.textContent = note_obj.content

    note_contents.appendChild(header)
    note_contents.appendChild(content)

    note.appendChild(note_contents)
    note.appendChild(actions)
    
    return note;
}

let main_note_container = document.querySelector('.main-note-container');
let normal_note_container = document.querySelector('.normal-note-container');
for (let note of data) {
    let n = makeNote(note)
    if (note.group === 'normal' ){
        normal_note_container.appendChild(n);
    }
    if (note.group === 'priority'){
        main_note_container.appendChild(n);
    }
}
