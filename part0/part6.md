Create a diagram depicting the situation where the user creates a new note using the single page version of the app.

title Adding a note by clicking on the Save button for SPA

User->Browser: enters text in field, clicks on Save
note right of Browser: event listener is placed on the Save button
Browser->Server: HTTP request is triggered by the event listener
Server->Browser: Sends back response
note left of Browser: Updates page based on changes returned by response body