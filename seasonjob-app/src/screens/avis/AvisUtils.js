const transformEpochToDate = function (timestamp) {
    // date format: dd-mm-yyyy
    const date = timestamp.toString().length === 13 ? new Date(timestamp) : new Date(timestamp * 1000)
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
}

const transformAvis = function (listAvis) {
    const transformedAvis = listAvis.map(avis => {
        return {
            id: avis.review.id,
            nom: avis.candidate ? avis.candidate.firstname : "nom",
            prenom: avis.candidate ? avis.candidate.lastname : "prenom",
            job: "job n°" + avis.review.jobId,
            note: avis.review.rating,
            date: transformEpochToDate(avis.review.createdAt),
            titre: avis.review.title,
            avis: avis.review.comment,
        }
    })
    return transformedAvis
}

export default transformAvis
