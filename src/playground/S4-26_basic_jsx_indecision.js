var app = {
    title: 'Indecision App',
    subtitle: 'You are now controlled by a computer',
    options: ['One', 'Two']
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderIndecisionApp();
    }
    
};

const deleteOptions = () => {
    app.options = [];
    renderIndecisionApp();
};

const makeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    // console.log(randomNum);
    alert(option);

};

var appRoot = document.getElementById('app');

const renderIndecisionApp = () => {
    var template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            {app.options.length > 0 ? "Here are your options" : "No options specified"}
            <p>Number of options: {app.options.length}</p>
            <button disabled={app.options.length === 0} onClick={makeDecision}>What do I do?</button>
            <button onClick={deleteOptions}>Remove Options</button>
            <ol>
                {
                    app.options.map((option) => {
                        return <li key={option}>{option}</li>;
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"></input>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

renderIndecisionApp();