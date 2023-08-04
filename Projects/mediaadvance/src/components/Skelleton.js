import classNames from 'classnames'

import React from 'react'

export default function Skelleton({ times, className }) {
    const boxes = []
    const outerClassNames = classNames(
        'relative',
        'overflow-hidden',
        'bg-gray-200',
        'rounded',
        'mb-2.5',
        className

    );
    const innerClassNames = classNames(
        'animate-shimmer',
        'absolute',
        'inset-0',
        '-translate-x-full',
        'bg-gradient-to-r',
        'from-gray-200',
        'via-white',
        'to-gray-200',
    );

    for (let i = 0; i < times.length; i++) {
        boxes.push(<div key={i} className={outerClassNames}>
            <h1>hello</h1>
            <div className={innerClassNames}></div>
        </div>)
    }

    return boxes

}
