interface MajorCredits {
    credits: number,
    _brand: "MajorCredits",
}

interface MinorCredits {
    credits: number
    _brand: "MinorCredits",
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits) {
    return { credit: subject1.credits + subject2.credits, brand: "MajorCredits" }
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits) {
    return subject1.credits + subject2.credits
}
