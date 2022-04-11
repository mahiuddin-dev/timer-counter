import React from 'react';

const Skills = (props) => (
    <div className="Skills">
        <h3>Skills:</h3>
        <ul>
            {props.listitems.map(listitem => (
            <li> {listitem.skill} </li>
            ))}
        </ul>
    </div>
)


export default Skills;