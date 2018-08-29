import * as actionTypes from '../actions/actions';

// TODO: Hent data fra server.
const medlemmerData = [
    {
        name: "Sivert Schou Olsen",
        image: "https://i.imgur.com/bSPVFxl.jpg",
        role: "Leder",
        email: "siverto@ifi.uio.no",
    }, {
        name: "Petter Sæther Moen",
        image: "https://i.imgur.com/69X4Q4J.jpg",
        role: "Nestleder",
        email: "pettesm@ifi.uio.no",
    }, {
        name: "Nicolai Rønning",
        image: "",
        role: "PR-Ansvarlig",
        email: "nicolr@ifi.uio.no",
    }, {
        name: "Vemund Justnes",
        image: "https://i.imgur.com/qRQTVk5.jpg",
        role: "Økonomiansvarlig",
        email: "vemundju@ifi.uio.no",
    }
]

const initialState = {
    styremedlemmer: medlemmerData,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default reducer;