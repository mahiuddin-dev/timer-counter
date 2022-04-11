import React from 'react';
import "./style.css";
import Bio from './bio';
import Skills from './skills';
import Links from './links';
import axios from 'axios';
import {useState,useEffect} from 'react';

function Profile (){
    
    const [persons, setPerson] = useState([])

    useEffect(()=>{
        async function getPerson() {
            try{
                const person = await axios.get('https://djangoreact2022.herokuapp.com/api/');
                setPerson(person.data);
                
            } catch (error) {
                console.log(error);
            }
        }
        getPerson()
    },[])

 
    return(
        <div className="Container">
            {
                
                persons.map((person,index)=>{
              
                    return (
                        <div className="wrap">
                           <Bio name={person.name} title={person.title} />
                            <Skills listitems={person.skills} />
                            <Links social={person.social_media} />
                           
                        </div>
                    )
                    
                }
                
                )
            }
        </div>
    )
}

export default Profile;