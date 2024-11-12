rules for consuming API
1. THEY decide the endpoints
2. THEY decide HOW data sent - JSON or XML
3. THEY decide how MUCH data - everything or one thing
4. THEY decide what the data looks like

RESTRICTIONS
routes must be
/api/todos
/api/todos/<unique identifier>
*get, post, delete, put

DATA
{
id: Number,
note: String,
is_completed: Boolean
}

must be C.reate R.ead U.pdate D.elete functional

Read
1. Route - /api/items, GET method
1.5. Get data from DB 
2. JSON
3. Everything back
4. Array of objects

Create
1. Route - /api/items, GET method
1.5. Get data from client
1.75. Database sends something back
2. JSON -> client
3. Send back one thing
4. One object - DATA, receipt from database

When we send data from client to server
We generally send as POST request
Sent through the "body"

Delete
1. Route - /api/items/<unique>, DELETE method
2. JSON
3. Send back one thing - what was deleted
4. One object

Update
1. Route - /api/items/<unique>, PUT method
1.5. What are we updating
2. JSON
3. Send back one thing - updated is_complete
4. Send back an object or just the is_complete