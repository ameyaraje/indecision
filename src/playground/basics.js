// Type 1: Simplest way, i.e. add HTML tags to a template and render them out
var template1 = (
    <div>
        <p>This is JSX</p>
    </div>
    );

// Method 2: Create variables and add their values inside a template to render
var username = 'Frank Lampard';
var template2 = (
    <div>
        <h1>{username}</h1>
        <p>Position: Midfielder</p>
        <p>Status: Legend</p>
    </div>
    );

// Method 3:  Create objects and refer their attributes/values inside templates to render
var user = {
    name: 'Steven Gerrard',
    position: 'Midfielder',
    status: 'Legend'
};
var template3 = (
    <div>
        <h1>{user.name}</h1>
        <p>Position: {user.position}</p>
        <p>Status: {user.status}</p>
    </div>
    );

var appRoot = document.getElementById('app');
ReactDOM.render(template3, appRoot);