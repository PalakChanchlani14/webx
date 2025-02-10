function trackClick(eventName) {
    console.log("Event Triggered:", eventName); // Console pe check karne ke liye
    gtag('event', eventName, {
        'event_category': 'User Interaction',
        'event_label': 'Button Click'
    });
}
function showMessage() {
    document.getElementById("message").innerText = "You clicked the button!";
    trackClick('Home Button Clicked'); // Google Analytics Event
}
