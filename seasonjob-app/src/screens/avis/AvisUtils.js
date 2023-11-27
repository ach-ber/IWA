const transformEpochToDate = function (timestamp) {
    // date format: dd-mm-yyyy
    const date = new Date(timestamp * 1000)
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
}

const transformAvis = function (listAvis) {
    const transformedAvis = listAvis.map(avis => {
        return {
            id: avis.id,
            nom: "nom",
            prenom: "prenom",
            job: "job",
            note: avis.rating,
            date: transformEpochToDate(avis.createdAt),
            titre: avis.title,
            avis: avis.comment,
        }
    })
    return transformedAvis
}

export default transformAvis
