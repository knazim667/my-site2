import React from 'react';
import { Preloader, Placeholder } from 'react-preloading-screen';
import PageTitle from '../components/PageTitle';
// import GoTop from '../components/GoTop';
import ContactBody from '../components/ContactBody';

export default function Contact() {
    return (
        <Preloader>
        <Placeholder>
            <div className="preloader">
                <div className="spinner"></div>
            </div>
        </Placeholder>
      
        <PageTitle>
            Contact
        </PageTitle>
        <ContactBody />

        {/* <GoTop scrollStepInPx="50" delayInMs="16.66" /> */}
    </Preloader>
    )
}
