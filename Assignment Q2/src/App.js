import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

const name = "Hello World";
const obj = {name: "Hello World Object"}
const data = ['We', 'are', 'United'] //Show these in seperate tags
const list = [{name: "Hello World 1"}, {name: "Hello World 2"}, {name: "Hello World 3"}] //Show these in seperate tags
const complex = [{company: 'XYZ', jobs: ['Javascript', 'React']}, {company: 'ABC', jobs: ['AngularJs', 'Ionic']}]


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>

        {/************************************/}   
        <h3>1. {name}</h3>
        <h3>2. {obj.name}</h3>
        {/************************************/}
        <ol>{data.map((value,index) =>
        <li key={index}>{value}</li>
        )}
        </ol>

        {/************************************/}
        <ul>{list.map((value,index) => <li key={index}>{value.name}</li>)}
        </ul>
        
        {/************************************/}
          <ul>
            {complex.map(value => {
              return <li>
                    <ol>Company Name: {value.company}
                      {value.jobs.map((jobs) =>{
                        return <li>Job Title: {jobs}</li>
                      })}
                    </ol>
              </li>
            })}
          </ul>




          




      </div>
    );
  }
}

export default App;
