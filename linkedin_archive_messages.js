timer = setInterval(() => {
    
    // works as of Nov 9, 2023
    // select all messages
    items = document.querySelectorAll('.msg-selectable-entity__checkbox-circle-container');
    for (let i = 0; i < items.length; i++) {
        items[i].click();
    }
    // click Archive button
    button = document.getElementById('ember356');
    button.click();
}, 5000);
