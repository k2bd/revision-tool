import { ALERT_BODY } from "@blueprintjs/core/lib/esm/common/classes"
import { isLiteralTypeNode } from "typescript"
import * as actionTypes from "./actionTypes"
import {SECTION_A, SECTION_B, SECTION_C, availableIssues} from "../data"


const initialState: RevisionState = {
    sections: [
        {
            title: SECTION_A,
            topics: [],
        },
        {
            title: SECTION_B,
            topics: [],
        },
        {
            title: SECTION_C,
            topics: [],
        },
    ]
}


const random_issues_for_section = (action: RevisionAction, state: RevisionState) => {
    const available_issues = [...availableIssues(action.section.title)]

    let newTopics: ITopic[] = available_issues
        .map((a) => ({sort: Math.random(), value: a}))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => ({name: a.value}))
        .slice(0, 5)

    let newSections = state.sections.map(
        (section: ISection) => {
            if (section.title == action.section.title) {
                return {
                    ...section,
                    topics: newTopics,
                }
            } else {
                return section
            }
        }
    )

    return {
        ...state,
        sections: newSections,
    }
}


const reducer = (
    state: RevisionState = initialState,
    action: RevisionAction,
): RevisionState => {
    switch(action.type) {
        case actionTypes.GET_RANDOM_ISSUES:
            return random_issues_for_section(action, state)
    }
    return state
}

export default reducer
