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

// const vedtekter = `
// #Navn, tilhørighet, formål og aktiviteter
//     ##Foreningens navn er IFI Spillutvikling.
//     ##Foreningen er en frivillig og selvstendig studentforening ved Institutt for Informatikk ved Universitetet i Oslo.
//     ##Foreningens formål er å fremme spillutviklingsinteressen blant studentene ved Universitetet i Oslo, samt å være et bindeledd hvor studenter med interesse for spillutvikling kan utveksle kunnskap, jobbe med prosjekter sammen og, gjennom dette, danne et godt sosialt miljø.
//     ##Foreningen vil holde foredrag / workshops med formål om å danne en grunnleggende forståelse innen spillutvikling, men også arrangere foredrag / workshop hvor arrangøren går dypere inn på enkelte emner innen spillutvikling. Det vil også arrangeres spillutviklingskonkurranser / game jams, med formål om at deltakerne i grupper, eller individuelt, skal utvikle et ferdig produkt innen en gitt tidsramme.

// #Styret
//     ##Foreningen drives av et demokratisk valgt styre.
//     ##Styret består av minimum fire (4) styremedlemmer og maks åtte (8).
//         ###Minimum 75% av styret må være semesterregistrerte IFI-studenter.
//     ##Styret består av styremedlemmer og de påkrevde rollene; leder, nestleder og økonomiansvarlig. Eventuelle andre roller blir satt i generalforsamlingen.
//     ##Leder, nestleder og andre roller velges under ordinær generalforsamling før endt vårsemester.
//         ###Her vil kandidater melde seg til ønsket rolle. Ved konflikt over rolle vil det bli holdt avstemning, hvor kandidaten med simpelt flertall trer inn.
//     ##Hvis leder trer av skal nestleder ta over stillingen som leder.
//     ##Dersom et styremedlem ikke møter på to påfølgende styremøter uten egenmelding, regnes vedkommende som fratrådt.
//     ##Det vil bli lagret informasjon om styremedlemmer i foreningens database. Informasjon som blir lagret om styremedlemmer er styremedlemmets fulle navn, UiO-brukernavn, fødselsdato og e-postadresse.
//         ###Informasjon om styremedlemmets fulle navn og e-postadresse vil være tilgjengelig offentlig på foreningens nettsider.

// #Frivillige / Interne
//     ##Interne kan bidra til foreningen gjennom diverse oppgaver, vanligvis rettet mot arrangementer. Mer spesifikt hvilke oppgaver den interne gjennomfører blir diskutert mellom den interne og styret.
//     ##Alle interesserte kan bidra i foreningen og bli intern.
//     ##Rekruttering av interne skjer gjennom søknad og / eller intervju med to styremedlemmer.
//     ##Det vil bli lagret informasjon om interne i foreningens database. Informasjon som blir lagret om interne er internes fulle navn, UiO-brukernavn, fødselsdato og e-postadresse.

// #Medlemskap
//     ##Alle semesterregistrerte studenter ved Universitetet i Oslo kan bli medlemmer i foreningen.
//     ##Det vil bli lagret informasjon om medlemmer i foreningens database. Informasjon som blir lagret om medlemmer er medlemmets fulle navn, e-postadresse og UiO-brukernavn.

// #Deltakelse
//     ##Arrangementer er åpne for alle interesserte.
//     ##Arrangementer holdes av styremedlemmer eller interne.

// #Generalforsamling
//     ##Generalforsamlingen er foreningens øverste myndighet.
//     ##Generalforsamling avholdes minimum én gang hvert år.
//     ##Leder og nestleder innkaller til generalforsamling, senest to uker før planlagt generalforsamling. 
//     ##Generalforsamling holdes åpen for alle, hvor alle deltakere kan komme med innspill og forslag. Alle aktive IFI-studenter på generalforsamlingen har stemmerett.
//     ##Generelle saker krever simpelt flertall for gjennomslag. 
//     ##Forslag til vedtektsendringer må skriftlig offentliggjøres minst 72 timer før generalforsamling. Disse krever ⅔-flertall for gjennomslag. 
//     ##Ekstraordinære generalforsamlinger avholdes dersom minst 4 IFI-studenter eller et styremedlem krever det. Ekstraordinære generalforsamlinger blir innkalt senest én uke i forveien. 
//     ##Møteinnkalling med komplett saksliste skal være tilgjengelig 48 timer før generalforsamling eller ekstraordinær generalforsamling.

// #Økonomi
//     ##Foreningens midler brukes til foreningens formål og aktiviteter.

// #Mistillit
//     ##Mistillitsforslag overfor foreningens styremedlemmer skal behandles på generalforsamling eller ekstraordinær generalforsamling, og krever ⅔-flertall for gjennomslag. 

// #Oppløsning
//     ##Oppløsning kan bare skje gjennom generalforsamling eller ekstraordinær generalforsamling.
//     ##Det kreves ⅔-flertall for at foreningen skal oppløses.
//     ##Ved oppløsning blir foreningens goder gitt tilbake til Fordelingsutvalget ved Institutt for informatikk.
// `;

const vedtekter = [
    {
        text: "Navn, tilhørighet, formål og aktiviteter",
        children: [
            { text: "Foreningens navn er IFI Spillutvikling." },
            { text: "Foreningen er en frivillig og selvstendig studentforening ved Institutt for Informatikk ved Universitetet i Oslo." },
            { text: "Foreningens formål er å fremme spillutviklingsinteressen blant studentene ved Universitetet i Oslo, samt å være et bindeledd hvor studenter med interesse for spillutvikling kan utveksle kunnskap, jobbe med prosjekter sammen og, gjennom dette, danne et godt sosialt miljø." },
            { text: "Foreningen vil holde foredrag / workshops med formål om å danne en grunnleggende forståelse innen spillutvikling, men også arrangere foredrag / workshop hvor arrangøren går dypere inn på enkelte emner innen spillutvikling. Det vil også arrangeres spillutviklingskonkurranser / game jams, med formål om at deltakerne i grupper, eller individuelt, skal utvikle et ferdig produkt innen en gitt tidsramme." },
        ]
    },
    {
        text: "Styret",
        children: [
            { text: "Foreningen drives av et demokratisk valgt styre." },
            {
                text: "Styret består av minimum fire (4) styremedlemmer og maks åtte (8).",
                children: [
                    { text: "Minimum 75% av styret må være semesterregistrerte IFI-studenter." }
                ]
            },
            { text: "Styret består av styremedlemmer og de påkrevde rollene; leder, nestleder og økonomiansvarlig. Eventuelle andre roller blir satt i generalforsamlingen." },
            {
                text: "Leder, nestleder og andre roller velges under ordinær generalforsamling før endt vårsemester.",
                children: [
                    { text: "Her vil kandidater melde seg til ønsket rolle. Ved konflikt over rolle vil det bli holdt avstemning, hvor kandidaten med simpelt flertall trer inn." }
                ]
            },
            { text: "Hvis leder trer av skal nestleder ta over stillingen som leder." },
            { text: "Dersom et styremedlem ikke møter på to påfølgende styremøter uten egenmelding, regnes vedkommende som fratrådt." },
            {
                text: "Det vil bli lagret informasjon om styremedlemmer i foreningens database. Informasjon som blir lagret om styremedlemmer er styremedlemmets fulle navn, UiO-brukernavn, fødselsdato og e-postadresse.",
                children: [
                    { text: "Informasjon om styremedlemmets fulle navn og e-postadresse vil være tilgjengelig offentlig på foreningens nettsider." }
                ]
            },

        ]
    },
    {
        text: "Frivillig / Interne",
        children: [
            { text: "Interne kan bidra til foreningen gjennom diverse oppgaver, vanligvis rettet mot arrangementer. Mer spesifikt hvilke oppgaver den interne gjennomfører blir diskutert mellom den interne og styret." },
            { text: "Alle interesserte kan bidra i foreningen og bli intern." },
            { text: "Rekruttering av interne skjer gjennom søknad og / eller intervju med to styremedlemmer." },
            { text: "Det vil bli lagret informasjon om interne i foreningens database. Informasjon som blir lagret om interne er internes fulle navn, UiO-brukernavn, fødselsdato og e-postadresse." },
        ]
    },
    {
        text: "Medlemskap",
        children: [
            { text: "Alle semesterregistrerte studenter ved Universitetet i Oslo kan bli medlemmer i foreningen." },
            { text: "Det vil bli lagret informasjon om medlemmer i foreningens database. Informasjon som blir lagret om medlemmer er medlemmets fulle navn, e-postadresse og UiO-brukernavn." },
        ]
    },
    {
        text: "Deltakelse",
        children: [
            { text: "Arrangementer er åpne for alle interesserte." },
            { text: "Arrangementer holdes av styremedlemmer eller interne." },
        ]
    },
    {
        text: "Generalforsamling",
        children: [
            { text: "Generalforsamlingen er foreningens øverste myndighet." },
            { text: "Generalforsamling avholdes minimum én gang hvert år." },
            { text: "Leder og nestleder innkaller til generalforsamling, senest to uker før planlagt generalforsamling. " },
            { text: "Generalforsamling holdes åpen for alle, hvor alle deltakere kan komme med innspill og forslag. Alle aktive IFI-studenter på generalforsamlingen har stemmerett." },
            { text: "Generelle saker krever simpelt flertall for gjennomslag. " },
            { text: "Forslag til vedtektsendringer må skriftlig offentliggjøres minst 72 timer før generalforsamling. Disse krever ⅔-flertall for gjennomslag. " },
            { text: "Ekstraordinære generalforsamlinger avholdes dersom minst 4 IFI-studenter eller et styremedlem krever det. Ekstraordinære generalforsamlinger blir innkalt senest én uke i forveien. " },
            { text: "Møteinnkalling med komplett saksliste skal være tilgjengelig 48 timer før generalforsamling eller ekstraordinær generalforsamling." },
        ]
    },
    {
        text: "Økonomi",
        children: [
            { text: "Foreningens midler brukes til foreningens formål og aktiviteter." },
        ]
    },
    {
        text: "Mistillit",
        children: [
            { text: "Mistillitsforslag overfor foreningens styremedlemmer skal behandles på generalforsamling eller ekstraordinær generalforsamling, og krever ⅔-flertall for gjennomslag." }
        ]
    },
    {
        text: "Oppløsning",
        children: [
            { text: "Oppløsning kan bare skje gjennom generalforsamling eller ekstraordinær generalforsamling." },
            { text: "Det kreves ⅔-flertall for at foreningen skal oppløses." },
            { text: "Ved oppløsning blir foreningens goder gitt tilbake til Fordelingsutvalget ved Institutt for informatikk." },
        ]
    },


]

const initialState = {
    styremedlemmer: medlemmerData,
    vedtekter: vedtekter,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default reducer;