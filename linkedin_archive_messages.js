timer = setInterval(() => {
    // select all messages
    items = document.querySelectorAll('.msg-selectable-entity__entity');
    for (let i = 0; i < items.length; i++) {
        items[i].click();
    }
    // click delete button
    buttons = document.querySelectorAll('.msg-conversation-card__toggle-archive-btn');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].click();
    }
})