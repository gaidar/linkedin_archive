timer = setInterval(() => {   
    // works as of Nov 9, 2023
    // select all messages
    items = document.querySelectorAll('.msg-selectable-entity__checkbox-circle-container');
    for (let i = 0; i < items.length; i++) {
        items[i].click();
    }
    delay = setInterval(() => {
    // click the Archive button
    c = document.querySelector('li-icon[type=archive-message-icon]');
    c.click();
    }, 2000);
}, 2000);
