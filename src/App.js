import React from 'react';
import "./App.css"
export default function MainPage(){
    return(
        <>
        <nav>
            
        <div className='center-nav'>
            <li><button>Home</button></li>
            <li><button>Projects</button></li>
            <li><button>About Me</button></li>
        </div>
         <div className='right-nav'> 
            <li><button>Contact me</button></li>
         </div>
        </nav>
        </>
    )
}

