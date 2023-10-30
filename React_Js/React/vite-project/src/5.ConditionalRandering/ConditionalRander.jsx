import React from 'react'

export default function ConditionalRander() {
    let newUser = true
    if (false) {

    return (
        <div>ConditionalRander
                
             <h1>Welcome New User</h1>
            
        </div>
    
    )
    }
    else{
        return( <h1>Already logged in</h1> )
        
    }
    
}
