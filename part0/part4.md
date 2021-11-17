
In chapter Loading a page containing JavaScript - review the chain of events caused by opening the page https://studies.cs.helsinki.fi/exampleapp/notes is depicted as a sequence diagram

The diagram was made using websequencediagrams service as follows:

title Adding a note by clicking on the Save button

User->Browser: enters text in field, clicks on Save
note right of Browser: POST request is triggered when form is submitted
Browser->Server: form info is packaged in HTML post request
Server->Browser: responds with 302 resource moved, browser prompted to make another GET request
Browser->Server: GET request made to list all resources
Server->Browser: returns resources browser asked for