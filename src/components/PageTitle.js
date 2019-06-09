import React from 'react';

export default function PageTitle(props) {
    return (
        <div className="page-title-area">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <h2>{props.children}</h2>
                    </div>
                </div>
            </div>
            
            <div className="shape1"><img src={require("../assets/images/shape1.png")} alt="shape" /></div>
            <div className="shape2 rotateme"><img src={require("../assets/images/shape2.svg")} alt="shape" /></div>
            <div className="shape3"><img src={require("../assets/images/shape3.svg")} alt="shape" /></div>
            <div className="shape4"><img src={require("../assets/images/shape4.svg")} alt="shape" /></div>
            <div className="shape5"><img src={require("../assets/images/shape5.png")} alt="shape" /></div>
            <div className="shape6 rotateme"><img src={require("../assets/images/shape4.svg")} alt="shape" /></div>
            <div className="shape7"><img src={require("../assets/images/shape4.svg")} alt="shape" /></div>
            <div className="shape8 rotateme"><img src={require("../assets/images/shape2.svg")} alt="shape" /></div>
        </div>
    )
}
