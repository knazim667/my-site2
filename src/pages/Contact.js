import React, {Component} from 'react';
import { Preloader, Placeholder } from 'react-preloading-screen';
import PageTitle from '../components/PageTitle';
import ContactBody from '../components/ContactBody';
import NoSSR from 'react-no-ssr';


class Contact extends Component {
    render(){
    return (
        <NoSSR>
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
    </Preloader>
    </NoSSR>
    )
}
}

export default Contact;