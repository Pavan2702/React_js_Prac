import React from 'react';

export default function Load({ loading }) {
    return (
        loading && <div>Loading...</div>
    );
}