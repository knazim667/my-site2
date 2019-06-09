import React from 'react'
import { Preloader, Placeholder } from 'react-preloading-screen'
import GoTop from '../components/GoTop';
import PageTitle from '../components/PageTitle';
import ProjectContent from '../components/ProjectContent';

class Project extends React.Component {
    render() {
        return (
            <Preloader>
                <Placeholder>
                    <div className="preloader">
                        <div className="spinner"></div>
                    </div>
                </Placeholder>
   
                <PageTitle> Projects </PageTitle>
                <ProjectContent />
             
                <GoTop scrollStepInPx="50" delayInMs="16.66" />
            </Preloader>
        )
    }
}

export default Project