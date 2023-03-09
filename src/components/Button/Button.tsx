import React from 'react';

interface PropsTypes {
    number: String | number,
    color: String
}

function Button() {
    function testingAgain() {
        alert('aaaaaa');
    }

    return(
        <div onClick={testingAgain}>
            Testing
        </div>
    );
};

export default Button;