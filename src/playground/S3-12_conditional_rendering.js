var app = {
    title: 'Indecision App',
    // subtitle: 'You are now controlled by a computer',
    options: ['One', 'Two']
};

var template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        {app.options.length > 0 ? "Here are your options" : "No options specified"}
        <ol>
            <li></li>
            <li></li>
        </ol>
    </div>
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);