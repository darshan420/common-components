import React from 'react';
import { storiesOf } from '@storybook/react';
import PasswordField from '../components/PasswordField';

/*
let passwordValid=true;
const mockValidation = (e) => {
    e.preventDefault();
    const validationAction = action('changed');
    validationAction(e);
    passwordValid=false;
};
*/

const helper='Min length is 8 and has to include; numbers,upper-,lowercase and specialcharacters (!#*-+=&%...)';

storiesOf('PasswordField', module)
    .add('password-field', () => <PasswordField helper={helper}/>)
//    .add('password-change', () => <PasswordField error={!passwordValid} onChange={mockValidation}/>)
