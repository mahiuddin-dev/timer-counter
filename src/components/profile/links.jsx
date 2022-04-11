import React from 'react';

const Links = (props) => (
    <div className="Links">
        <h3>Social Links:</h3>
        <ul>
            {props.social.map(link => (
                <li> <a target="_" href={link.link}>{link.social_media}</a> </li>
            ))}
            
        </ul>
    </div>
)

export default Links;