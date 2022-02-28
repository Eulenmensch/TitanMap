import * as L from 'leaflet';

export function createMap() : L.Map{
    let map = L.map('map').setView([0, 0], 1);

    L.tileLayer('map/{z}/{x}/{y}.png', {
        minZoom: 0,
        maxZoom: 5,
        noWrap: false
    }).addTo(map);

    return map;
}