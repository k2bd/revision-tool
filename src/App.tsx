import React from 'react';
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { Dispatch } from "redux"

import { Section } from './components/Section';
import { getRandomIssues } from './store/actionCreators';

import { Alignment, Button, Navbar, NavbarDivider, NavbarGroup, NavbarHeading } from "@blueprintjs/core";


const App: React.FC = () => {
    const dispatch: Dispatch<any> = useDispatch()

    const allSections: readonly ISection[] = useSelector(
        (state: RevisionState) => state.sections,
        shallowEqual
    )

    const newTopicsDispatch = React.useCallback(
        (section: ISection) => dispatch(getRandomIssues(section)),
        [dispatch, getRandomIssues]
    )

    const displaySections = allSections.map(
        (section: ISection) => (
            <Section
                section={section}
                newTopics={getRandomIssues}
            />
        )
    )

    const refreshTopics = () => {
        allSections.forEach(
            (section: ISection) => {
                newTopicsDispatch(section)
            }
        )
    }

    return (
        <div>
            <div>
                <Navbar>
                    <NavbarGroup align={Alignment.LEFT}>
                        <NavbarHeading>Test Simulator</NavbarHeading>
                        <NavbarDivider />
                        <Button
                            icon="refresh"
                            text="New Topics"
                            onClick={refreshTopics}
                        />
                    </NavbarGroup>
                </Navbar>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }}>
                {displaySections}
            </div>
        </div>
    );
}

export default App;
