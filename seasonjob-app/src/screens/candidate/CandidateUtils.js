const transformAddress = (address) => {
    return `${address.streetNum} ${address.streetName}, ${address.zipCode} ${address.city}, ${address.country}`
}

const transformDate = (date) => {
    return date.split("T")[0]
}

const transformPhone = (phone) => {
    // remove whitespace from phone number
    return phone.replace(/\s/g, "")
}

const transformCandidate = (candidate) => {
    const candidateDetails = {
        id: candidate.id,
        name: `${candidate.firstname} ${candidate.lastname}`,
        address: transformAddress(candidate.address),
        phone: transformPhone(candidate.phone),
        email: candidate.email,
    }

    const avis = candidate.opinions.map((opinion) => {
        return {
            id: Math.random().toString(36).substring(2),
            // i think it should be employer’s name there,
            // because we are on the candidate’s page
            // then here what’s relevant is the employer’s name
            nom: candidate.firstname,
            prenom: candidate.lastname,
            job: "job",
            note: opinion.score,
            date: transformDate(opinion.providedAt),
            titre: "titre avis 1",
        }
    })

    const experiences = candidate.experiences.map((experience) => {
        return {
            id: Math.random().toString(36).substring(2),
            entreprise: experience.establishment.establishmentName,
            job: experience.job,
            period: `${transformDate(experience.startedAt)} - ${transformDate(experience.endedAt)}`,
        }
    })

    const references = candidate.references.map((reference) => {
        return {
            id: Math.random().toString(36).substring(2),
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
