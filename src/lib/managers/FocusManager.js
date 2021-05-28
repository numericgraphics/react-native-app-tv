class FocusManager {
    constructor () {
        this.focus = {
            ref: null,
            type: 'scale',
            parent: {
                parentIndex: null,
                parentName: null
            },
            key: null
        }
        this.XCoords = 0
        this.YCoords = 0
        this.swimLanes = {}
        this.currentKey = null
        this.drawer = {}
    }

    setFocus (item) {
        this.focus = { ...this.focus, ...item }
    }

    getFocus () {
        return this.focus
    }

    setXCoords (data) {
        this.XCoords = data
    }

    setYCoords (data) {
        this.YCoords = data
    }

    getXCoords () {
        return this.XCoords
    }

    getYCoords () {
        return this.YCoords
    }

    setSwimLanes (swimLanes) {
        this.swimLanes[swimLanes.name] = swimLanes
    }

    getSwimLanes (name) {
        return this.swimLanes[name]
    }

    getAllSwimLanes () {
        return this.swimLanes
    }

    modifySwimLane (name, key, value) {
        this.swimLanes[name][key] = value
    }

    setCurrentKey (key) {
        this.currentKey = key
    }

    getCurrentKey () {
        return this.currentKey
    }

    getNextFocusLeft (screenName) {
        return this.getDrawer(screenName)
    }

    setDrawer (item) {
        this.drawer[item.name] = item.ref
    }

    getDrawer (name) {
        return this.drawer[name]
    }
}

const FocusManagerInstance = new FocusManager()

export default FocusManagerInstance
