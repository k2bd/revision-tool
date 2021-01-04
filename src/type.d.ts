interface ISection {
    title : string,
    topics : ITopic[],
}

interface ITopic {
    name : string,
}

// ----- STATE -----

type RevisionState = {
    sections: ISection[],
}


type RevisionAction = {
    type: string,
    section: ISection,
    topic?: ITopic | null,
}

type DispatchType = (args: RevisionAction) => RevisionAction

