var appRoot = document.getElementById('app');

var flag = false;

const toggleDetails = () => {
    flag = !flag;
    console.log(flag);
    render();
};

const render = () => {
    var template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleDetails}>{!flag ? "Show Details" : "Hide Details"}</button>
            <p>
                {flag ? "Here are the details" : ""}
            </p>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

render();