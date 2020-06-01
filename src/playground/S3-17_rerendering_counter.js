let count = 0;
const addOne = () => {
    count = count +1;
    renderCounterApp();
};
const lessOne = () => {
    count = count -1;
    renderCounterApp();
};
const resetCount = () => {
    count = 0;
    renderCounterApp();
};

var appRoot = document.getElementById('app');

const renderCounterApp = () => {
    var template = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={lessOne}>-1</button>
            <button onClick={resetCount}>Reset</button>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

renderCounterApp();