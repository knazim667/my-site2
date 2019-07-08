import React, { Fragment } from 'react'
import { Preloader, Placeholder } from 'react-preloading-screen'
import PageTitle from '../components/PageTitle';
import ProjectContent from '../components/ProjectContent';

class Project extends React.Component {
    render() {
        return (
            <Fragment>
                <Preloader>
                    <Placeholder>
                        <div className="preloader">
                            <div className="spinner"></div>
                        </div>
                    </Placeholder>
    
                    <PageTitle> Projects </PageTitle>
                    <ProjectContent />
                
                </Preloader>

            </Fragment>
        )
    }
}

export default Project