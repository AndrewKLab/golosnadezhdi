import { action, computed, makeObservable, observable } from "mobx";

class Radio {
    _play = false
    _quality = false
    _mute = false
    _stream_type = false
    _radio_player = null

    constructor() {
        makeObservable(this, {
            _play: observable,
            _quality: observable,
            _mute: observable,
            _stream_type: observable,
            _radio_player: observable,

            setPlay: action,
            setQuality: action,
            setMute: action,
            setStreamType: action,
            setRadioPlayer: action, 

            play: computed,
            quality: computed,
            mute: computed,
            stream_type: computed,
            radio_player: computed,
        })
    }

    setPlay(bool) { 
        this._play = bool;
    }
    setQuality(bool) { 
        this._quality = bool;
    }
    setMute(bool) { 
        this._mute = bool;
    }
    setStreamType(bool) { 
        this._stream_type = bool;
    }
    setRadioPlayer(player) { 
        this._radio_player = player;
    }

    get play() { return this._play }
    get quality() { return this._quality }
    get mute() { return this._mute }
    get stream_type() { return this._stream_type }
    get radio_player() { return this._radio_player }
}

export const radioStore = new Radio();