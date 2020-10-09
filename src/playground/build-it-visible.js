console.log("App.js is running!");

let visibility = false;

const app = {
    title: 'Visibility Toggle',
    details: []
}



const details = () => {
    visibility = !visibility;
    render()
}


const render = () => {
    const template = (
    <div>
        <h1>{app.title}</h1>
        <button onClick={details}>{!visibility > 0 ? 'Show Details' : 'Hide Details'}</button>
        {visibility && (
            <div>
                <p>Some details</p>
            </div>
        )}
    </div>
    );
    ReactDOM.render(template, document.getElementById('app'));
}

render();