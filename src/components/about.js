import './stylesheets/about.css';
import Profileimg from '../assests/WhatsApp Image 2023-07-04 at 04.07.54.jpg'
import React from 'react';
function about(){

    const collegedetails = [
        {
            id: 1,
            year: "2021-2025",
            institute: "Birla Institute Of Technology Mesra."
        },
        {
            id: 2,
            year: "2010-2021",
            institute: "D.A.V Public School Medical Unit Gaya."
        }
    ];

    const creativelist = ["Typography", "Time Management" , "Patience", "UI/UX" , "Teamwork", "Problem Solving"];

    const techlist = ["C++", "C", "Java", "HTML", "CSS", "JavaScript", "React", "MongoDB", "PHP", "MySQL","GoLang", "Figma", "Photoshop" ,"AfterEffect"]

    const welist = [
        {
            stats : "Present",
            work: "Co-owner and developer of Notebit."
        },
        {
            stats : "Present",
            work: "Management in Soulcity Roleplay."
        },
        {
            stats : "March 2023",
            work : "Navin Cinema Website."
        },
        {
            stats : "Count : 32",
            work : "Client Work include UI design and websites."
        }
    ];

    return(
       <div className="aboutconatiner" id='about'>
        <div className='resumeholder'>
            <div className='resume'>Resume</div>
        </div>

        <div className='aboutlowerconatiner'>
            <div className='box box1'>
                <img src={Profileimg}></img>
            </div>
            <div className='box box2'>
                <h2>it's me, hi!</h2>
                <p>I'm Faiz Khan, a college student from Patna Bihar. Currently doing B.Tech in Information Technology.<br/>
                    I intend to deliver distinct messaging through my work and make it my exquisite signature.<br/>
                    My impulsive hobbies include web development , UI designing and Problem Solving.<br/><br/>
                    PS - I might not be the problem,<br/>
                    but I can always solve one with the superpowers of coding.

                </p>
            </div>
            <div className='box box3'>
                <h2>Education</h2>
                <div className='edudetails' id='edudetails'>
                    {
                        collegedetails.map((data)=>
                        <div><span>{data.year}</span> | {data.institute}</div>
                        )
                    }
                </div>
            </div>
        </div>
        <div className='aboutlowerconatiner mo-2'>
            <div className='box box4'>
                    <h2>Creative Skills</h2>
                    <div className='interestholder'>
                        <ul>
                        {
                            creativelist.map((data)=>
                            
                                <li>{data}</li>
                            )
                        }
                        </ul>
                    </div>
            </div>
            <div className='box box5'>
                <h2>Technology Skill</h2>
                <div className='techholder'>
                {
                        techlist.map((data)=>
                        <div className='minibox'>{data}</div>
                        )
                }
                </div>
            </div>
            <div className='box box6'>
                <h2>Work Experience</h2>
                <div className='weholder'>
                {
                        welist.map((data)=>
                        <div className='weinnerholder'>
                        <span>{data.stats}</span>
                        <h4>{data.work}</h4>
                        </div>
                        )
                }
                </div>
            </div>
        </div>
       </div>
    )
}

export default about;