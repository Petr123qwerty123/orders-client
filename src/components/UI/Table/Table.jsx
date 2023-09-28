import React from 'react';
import classes from './Table.module.css'

const Table = ({ title, data, alias }) => {
    const updateData = data.map(obj => {
        const renamedObj = {};

        for (let key in alias) {
            if (alias.hasOwnProperty(key)) {
                renamedObj[alias[key]] = obj[key];
            } else {
                renamedObj[key] = obj[key];
            }
        }

        return renamedObj;
    });

    const keys = updateData.reduce((keys, obj) => {
        Object.keys(obj).forEach(key => {
            if (!keys.includes(key)) {
                keys.push(key);
            }
        });
        return keys;
    }, []);

    return (
        <div>
            <h1>{title}</h1>
            <table className={classes.table}>
                <thead>
                <tr>
                    {keys.map(key => (
                        <th key={key}>{key}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {updateData.map((obj, index) => (
                    <tr key={index}>
                        {keys.map(key => (
                            <td key={key}>{obj[key]}</td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;