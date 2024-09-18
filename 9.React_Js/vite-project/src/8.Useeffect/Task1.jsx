import React, { useState } from 'react';
import { Button } from 'reactstrap';
import Load from './load';

export default function Task1() {
    const [displayedStr, setDisplayedStr] = useState('');
    const [loading, setLoading] = useState(false);

    const handleClick = (str) => {
        setLoading(true);
        setTimeout(() => {
            setDisplayedStr(str);
            setLoading(false);
        }, 3000);
    };

    return (
        <div>
            <Button onClick={() => handleClick('str1, str2, str3')} disabled={loading}>
                Show str1, str2, str3
            </Button>
            <Button onClick={() => handleClick('str2, str3')} disabled={loading}>
                Show str2, str3
            </Button>
            <Button onClick={() => handleClick('str3')} disabled={loading}>
                Show str3
            </Button>

            <Load loading={loading} /> {/* Pass loading state as prop */}
            <h1>{displayedStr}</h1>
        </div>
    );
}


// {loading ? (
//     <Load/> // Render the LoadingPage component when loading is true
// ) : (
//     <h1>{displayedStr}</h1>
// )}
// </div>