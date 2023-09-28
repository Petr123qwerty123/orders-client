import React from 'react';
import './DefinitionList.module.css'

const DefinitionList = ({ title, items }) => {
    return (
        <div>
            <h1>{title}</h1>
            <dl>
                {
                    items.map(entry =>
                        <React.Fragment>
                            <dt>{entry[0]}</dt>
                            <dd>{entry[1]}</dd>
                        </React.Fragment>
                    )
                }
            </dl>
        </div>
    );
};

export default DefinitionList;