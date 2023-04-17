import React from 'react'

const tableName = 'Table Example';

function App() {
    return (
    <div>
        <Headers />
        <FormInput />
        <FormData />
    </div>
    );
}

function Headers() {
    return (
    <div>
    <h1>{tableName}</h1>
    </div>
    );
}

function FormInput() {
    return (
    <div>
        <input type='text' placeholder='Type new name here'/>
        <input type='text' placeholder='Type new organization here'/>
        <input type='text' placeholder='Type new position here'/>
        <button type='submit'>Save</button>
    </div>
    );
}

function FormData() {
    return (
    <div>
        <table>
            <tr>
                <td><b>Name</b></td>
                <td><b>Organization</b></td>
                <td><b>Position</b></td>
            </tr>
            <tr>
                <td>John</td>
                <td>ABC Inc.</td>
                <td>Developer</td>
            </tr>
            <tr>
                <td>Bob</td>
                <td>123 LLC</td>
                <td>Manager</td>
            </tr>
        </table>
    </div>
    );
}

export default App;