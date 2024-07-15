import PropTypes from "prop-types";
import "./Error.css"
function Error(props) {
    return(
        <div className="error-wrapper">
            <h1 className="error-text">{props.children}</h1>
        </div>
    );
}

Error.propTypes = {
    children: PropTypes.string.isRequired,
};

export default Error