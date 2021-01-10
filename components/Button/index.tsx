import React from 'react';

interface Props {
    children: React.ReactNode;
}

function Index(props: Props) {
    const { } = props;

    return (
        <button>
            {props.children}
        </button>
    );
}

export default Index;
