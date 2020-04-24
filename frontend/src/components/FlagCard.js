import React from 'react'

class FlagCard extends React.Component {
    render() {
        return (
            <div className='flag-card'>
                <img src={this.props.flag} className='flag-image'/>
            </div>
        )
    }
}

export default FlagCard