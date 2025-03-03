timer = setInterval(() => {   
    // works as of Mar 3, 2025
    // select all messages
    items = document.querySelectorAll('.msg-selectable-entity__checkbox-circle-container');
    for (let i = 0; i < items.length; i++) {
        items[i].click();
    }
    delay = setInterval(() => {
    // click the Archive button
    c = document.querySelector('button[aria-label="Archive"]');
    c.click();
    }, 2000);
}, 2000);
