import React, { useState } from 'react';
import './StateDropdown.css';

import { allStates } from './states';

export function StateDropdown() {
    const [isDropdownDisplayed, setIsDropdownDisplayed] = useState(false);
    const [selectedStates, setSelectedStates] = useState(
        allStates.reduce(
            (obj, state) => ({
                ...obj,
                [state.abbreviation]: false,
            }),
            {}
        )
    );

    console.log('selectedStates', selectedStates);

    const numberOfStatesSelected =
        Object.values(selectedStates).filter(Boolean).length;

    console.log('numberOfStatesSelected', numberOfStatesSelected);

    return (
        <fieldset className="state-dropdown">
            <button
                onClick={() =>
                    setIsDropdownDisplayed((prevState) => !prevState)
                }>
                {numberOfStatesSelected > 0
                    ? `${numberOfStatesSelected} states selected`
                    : `--Select Your States --`}
            </button>
            {isDropdownDisplayed && (
                <div className="panel">
                    {allStates.map((state) => (
                        <fieldset
                            key={state.abbreviation}
                            className={
                                selectedStates[state.abbreviation]
                                    ? `selected`
                                    : ''
                            }>
                            <input
                                onChange={(e) =>
                                    setSelectedStates({
                                        ...selectedStates,
                                        [state.abbreviation]: e.target.checked,
                                    })
                                }
                                checked={selectedStates[state.abbreviation]}
                                id={`input-${state.abbreviation}`}
                                type="checkbox"
                            />
                            <label htmlFor={`input-${state.abbreviation}`}>
                                {state.name}
                            </label>
                        </fieldset>
                    ))}
                </div>
            )}
        </fieldset>
    );
}
