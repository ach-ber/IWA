const transformAddress = (address) => {
    return `${address.streetNum} ${address.streetName}, ${address.zipCode} ${address.city}, ${address.country}`
}

const transformDate = (date) => {
    return date.split("T")[0]
}

const transformCandidate = (candidate) => {
    const candidateDetails = {
        id: candidate.id,
        name: `${candidate.firstname} ${candidate.lastname}`,
        address: transformAddress(candidate.address),
        phone: candidate.phone,
        email: candidate.email,
    }

    const avis = candidate.opinions.map((opinion) => {
        return {
            id: opinion.id,
            nom: "nom",
            prenom: "prenom",
            job: "job",
            note: opinion.score,
            date: transformDate(opinion.providedAt),
            titre: "titre avis 1",
        }
    })

    const experiences = candidate.experiences.map((experience) => {
        return {
            id: experience.id,
            entreprise: experience.establishment.establishmentName,
            job: experience.job,
            period: `${transformDate(experience.startedAt)} - ${transformDate(experience.endedAt)}`,
        }
    })

    const references = candidate.references.map((reference) => {
        return {
            id: reference.id,
            nomComplet: reference.refName,
            phone: reference.refPhone,
            email: reference.refEmail,
            establishment: reference.refEstablishment,
        }
    })

    return {
        details: candidateDetails,
        avis: avis,
        experiences: experiences,
        references: references,
    }
}

export default transformCandidate
