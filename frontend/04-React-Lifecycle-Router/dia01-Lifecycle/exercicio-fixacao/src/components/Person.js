import React from "react";

class Person extends React.Component {
    render() {
        const { person } = this.props
        const personObj = person[0]
        return(
            <div>
                
            <div>{`${personObj.name.title} ${personObj.name.first} ${personObj.name.last}`}</div>

            <div>{personObj.dob.age}</div>

            <div>{personObj.email}</div>

            <img src={personObj.picture.thumbnail} alt={`${personObj.name.title} ${personObj.name.first} ${personObj.name.last}`}/>
            </div>
        )
    }
}


export default Person