import React from "react";


function Links(props) {
    return (
        <>
            <h3>Links</h3>
            <a href={props.git}>{props.git}</a>
            <a href={props.linkd}>{props.linkd}</a>
        </>
    );
}

export default Links;
