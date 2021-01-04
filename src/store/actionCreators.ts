import * as actionTypes from "./actionTypes"


export function getRandomIssues(section: ISection) {
    const random_issues_action: RevisionAction = {
        type: actionTypes.GET_RANDOM_ISSUES,
        section: section,
        topic: null,
    }

    return (dispatch: DispatchType) => {
        dispatch(random_issues_action)
    }
}
