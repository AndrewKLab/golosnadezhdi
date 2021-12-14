import axios from "axios";

export const radioService = {
    getTrackNameGN,
    getTrackNameMGN
}

function getTrackNameGN(){
    return axios.get('https://golosnadezhdi.radioca.st/currentsong')
}
function getTrackNameMGN(){
    return axios.get('https://mradio.radioca.st/currentsong')
}