import PropTypes from 'prop-types';

export default function Notification({ notify }){
    return(
        <>
            <p>{notify}</p>
        </>
    )
}

Notification.propType = {
    notify: PropTypes.string.isRequired
}