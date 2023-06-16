import classNames from 'classnames'

import React from 'react'

export default function Skelleton({ times }) {
    const boxes = []

    for (let i = 0; i < times.length; i++) {
        boxes.push(<div key={i} className=""></div>)
    }

    return boxes

}
