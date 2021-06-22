import React from 'react'

/**
 * @namespace Tools
 */

/**
 * @typedef {function} Tools.capitalizeFirstLetter
 * @description Default List of components types available
 * @param {string} string word to be treat
 * @returns {string}
 */
export function capitalizeFirstLetter (string) {
    return string[0].toUpperCase() + string.slice(1)
}

/**
 * @typedef {function} Tools.randomColors
 * @description Get a random color
 * @returns {string}
 */
export function randomColors () {
    return Math.floor(Math.random() * 16777215).toString(16)
}

/**
 * @typedef {function} Tools.hexToRgbA
 * @description Color with transparency
 * @param {String} hex hexadecimal value
 * @param {number} A alpha value
 * @returns {string}
 */
export function hexToRgbA (hex, A) {
    let c
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex) && A <= 1 && A >= 0 && typeof A === 'number') {
        c = hex.substring(1).split('')
        if (c.length === 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]]
        }
        c = '0x' + c.join('')
        return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',' + A + ')'
    } else {
        console.log('Bad Hex or Alpha HEX : ' + hex + ' Alpha : ' + A)
        // default color on error
        return 'rgba(255,0,0,1)'
    }
}

/**
 * @typedef {function} Tools.getClonedRenderItem
 * @description Get a cloned component
 * @param  {HTMLHtmlElement} renderItem - react component to be used for rendering
 * @param  {Object} props - list of properties for the renderItem
 * @returns {React.DetailedReactHTMLElement<*, HTMLElement>}
 */
export const getClonedRenderItem = (renderItem, props) => {
    return React.cloneElement(renderItem, { ...props })
}
