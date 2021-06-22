
/**
 * @namespace Enumeration
 */

/**
 * @typedef {object} Enumeration.ITEM_TYPE
 * @description Default List of components types available
 * @property {String}  SWIMLANE
 * @property {String}  EPG_GRID
 * @property {String}  EPG_SWIMLANE
 * @property {String}  TOPIC_SELECTOR
 * @property {String}  LIVE_MULTI_CAST
 * @property {String}  HERO_STAGE
 * @property {String}  HEADER_STAGE
 */
export const ITEM_TYPE = Object.freeze({
    SWIMLANE: 'Swimlane',
    EPG_GRID: 'EpgGrid',
    EPG_SWIMLANE: 'EpgSwimlane',
    TOPIC_SELECTOR: 'TopicSelector',
    LIVE_MULTI_CAST: 'LiveMulticast',
    HERO_STAGE: 'HeroStage',
    HEADER_STAGE: 'HeaderStage'
})

export const THEMES = Object.freeze({
    LAYOUT: 'LAYOUT',
    DEFAULT: 'DEFAULT'
})

/**
 * @typedef {object} Enumeration.MEDIA_TYPE
 * @description Default List of media types available for Swimlane
 * @property {String}  CARD
 * @property {String}  CAROUSEL
 * @property {String}  MEDIA
 * @property {String}  MEDIA_LABEL
 * @property {String}  POSTER
 * @property {String}  ROUND
 * @property {String}  TOPIC
 */
export const MEDIA_TYPE = Object.freeze({
    CARD: 'CARD',
    CAROUSEL: 'CAROUSEL',
    MEDIA: 'MEDIA',
    MEDIA_LABEL: 'MEDIA_LABEL',
    POSTER: 'POSTER',
    ROUND: 'ROUND',
    TOPIC: 'TOPIC'
})
