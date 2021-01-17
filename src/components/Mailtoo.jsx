import React from 'react'
import Mailto from 'react-mailto'

const Mailtoo = () => {
    /*const Mailto = require('react-mailto');
    const React  = require('react');*/
    return (
        <div>
                <Mailto email="j@sonbellamy.com" obfuscate={true}>
                    Email me!
                </Mailto>
        </div>
    )
}

export default Mailtoo
