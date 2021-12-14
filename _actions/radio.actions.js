import { radioStore } from "../_store"
import TrackPlayer from 'react-native-track-player';
import { radioService } from "../_service";
import { httpConstants } from "../_constants";

export const radioActions = {
    init,
    close,
    play,
    pause,
    setHQRadio,
    setLQRadio,
    mute,
    unmute,
    setStreamGolos,
    setStreamMolodesh
}

async function init() {
    try {
        await TrackPlayer.setupPlayer();
        var track_name = await radioService.getTrackNameGN()
        await TrackPlayer.add({ url: httpConstants.gn.hq, title: track_name.data })
        var track = await TrackPlayer.getTrack(0)

        radioStore.setRadioPlayer(track)
    } catch (error) {
        console.log(error)
    }

}

async function close() {
    try {
        await TrackPlayer.destroy();
        radioStore.setPlay(false);
        radioStore.setQuality(false);
        radioStore.setMute(false);
        radioStore.setStreamType(false)
    } catch (error) {
        console.log(error)
    }

}

async function setHQRadio(stream_type) {
    try {
        var state = await TrackPlayer.getState();
        if (state === 3) await TrackPlayer.pause();

        await TrackPlayer.remove(0)

        var track_name
        if (stream_type) track_name = await radioService.getTrackNameMGN()
        else track_name = await radioService.getTrackNameGN();

        await TrackPlayer.add({ url: stream_type ? httpConstants.mgn.hq : httpConstants.gn.hq, title: track_name.data })
        var track = await TrackPlayer.getTrack(0)
        radioStore.setRadioPlayer(track)
        radioStore.setQuality(true)

        if (state === 3) await TrackPlayer.play();
    } catch (error) {
        console.log(error)
    }
}

async function setLQRadio(stream_type) {
    try {

        var state = await TrackPlayer.getState();

        if (state === 3) await TrackPlayer.pause();

        await TrackPlayer.remove(0)

        var track_name
        if (stream_type) track_name = await radioService.getTrackNameMGN()
        else track_name = await radioService.getTrackNameGN();

        await TrackPlayer.add({ url: stream_type ? httpConstants.mgn.lq : httpConstants.gn.lq, title: track_name.data })
        var track = await TrackPlayer.getTrack(0)
        radioStore.setRadioPlayer(track)
        radioStore.setQuality(false)

        if (state === 3) await TrackPlayer.play();

    } catch (error) {
        console.log(error)
    }
}

async function play() {
    radioStore.setPlay(true)
    await TrackPlayer.play();
}

async function pause() {
    radioStore.setPlay(false)
    await TrackPlayer.pause();
}

async function mute() {
    radioStore.setMute(true)
    await TrackPlayer.setVolume(0);
}

async function unmute() {
    radioStore.setMute(false)
    await TrackPlayer.setVolume(1);
}

async function setStreamGolos() {

    try {
        var state = await TrackPlayer.getState();
        if (state === 3) await TrackPlayer.pause();

        await TrackPlayer.destroy();
        await TrackPlayer.setupPlayer();

        var track_name = await radioService.getTrackNameGN();
        await TrackPlayer.add({ url: httpConstants.gn.hq, title: track_name.data })

        var track = await TrackPlayer.getTrack(0)
        radioStore.setRadioPlayer(track)
        if (state === 3) radioStore.setPlay(true)
        else radioStore.setPlay(false)
        radioStore.setQuality(false)
        radioStore.setStreamType(false)
        if (state === 3) await TrackPlayer.play();
    } catch (error) {
        console.log(error)
    }
}

async function setStreamMolodesh() {
    try {
        var state = await TrackPlayer.getState();
        if (state === 3) await TrackPlayer.pause();

        await TrackPlayer.destroy();
        await TrackPlayer.setupPlayer();

        var track_name = await radioService.getTrackNameMGN();
        await TrackPlayer.add({ url: httpConstants.mgn.hq, title: track_name.data })

        var track = await TrackPlayer.getTrack(0)
        radioStore.setRadioPlayer(track)
        if (state === 3) radioStore.setPlay(true)
        else radioStore.setPlay(false)
        radioStore.setQuality(false)
        radioStore.setStreamType(true)
        if (state === 3) await TrackPlayer.play();
    } catch (error) {
        console.log(error)
    }
}