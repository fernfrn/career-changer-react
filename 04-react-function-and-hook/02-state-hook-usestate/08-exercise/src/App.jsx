import React from 'react';

let name = 'Fern';
let bio = "It's me. Hi, I'm the problem. It's me!";


function App() {

    const [name, setName] = useState('')
    const [bio, setBio]= useState('')

    return (
      <div id="app">
        <img width="150px" src="https://static01.nyt.com/images/2022/09/09/science/00tb-FERNS2/00tb-FERNS2-articleLarge.jpg?quality=75&auto=webp&disable=upscale" />
        {/* <ChangeBio /> */}
        <Info />
        <Social />
      </div>
    );
    }

//     return(
//         <div>
//             <input type="text" placeholder="name here" onChange={(event) => {console.log(event.target.value)}}/>
//             <input type="text" placeholder="short bio" onChange={handleChange}/>
//         </div>
//     )

function Info() {
    return (
        <div>
        <input type="text" placeholder="name here" onChange={(event) => {setName(event.target.value)}}/><h1>{name}</h1>
        <input type="text" placeholder="bio here" onChange={(event) => {setBio(event.target.value)}}/><p>{bio}</p>
        </div>
    );
}

function Social() {
    return (
        <div>
            <a href="https://facebook.com/">facebook</a>
            &nbsp;&nbsp;
            <a href="https://twitter.com">twitter</a>
        </div>
    )
}

export default App;
