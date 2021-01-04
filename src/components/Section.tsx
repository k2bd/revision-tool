import * as React from "react"
import { Dispatch } from "redux"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { Topic } from "./Topic"
import { Button, Card, Classes, Elevation, Overlay } from "@blueprintjs/core"
import classNames from "classnames"
import { useState } from "react"
import {availableIssues} from "../data"


type Props = {
    section: ISection,
    newTopics: (section: ISection) => void,
}


export const Section: React.FC<Props> = ({section, newTopics}) => {
    const dispatch: Dispatch<any> = useDispatch()

    const displayTopics = section.topics.map(
        (topic: ITopic) => (
            <Topic topic={topic} />
        )
    )

    const [showingAllTopics, setShowingAllTopics] = useState(false)

    const newTopicsDispatch = React.useCallback(
        (section: ISection) => dispatch(newTopics(section)),
        [dispatch, newTopics]
    )

    const allTopicsDisplay = availableIssues(section.title).map(
        (name: string) => (
            <p>{name}</p>
        )
    )

    return (
        <div>
            <Card interactive={false} elevation={Elevation.ZERO}>
                <div className='rowC'>
                    <Button
                        icon="refresh"
                        text={section.title}
                        onClick={() => newTopicsDispatch(section)}
                    />
                </div>
                {displayTopics}
                <Button text="Show All Topics" onClick={() => setShowingAllTopics(true)}/>
            </Card>
            <Overlay
                isOpen={showingAllTopics}
                className={classNames(Classes.OVERLAY_SCROLL_CONTAINER,)}
                onClose={()=> setShowingAllTopics(false)}
            >
                <Card>{allTopicsDisplay}</Card>
            </Overlay>
        </div>
    )
}
