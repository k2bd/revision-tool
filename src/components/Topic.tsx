import * as React from "react"
import { Dispatch } from "redux"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { Card, Elevation } from "@blueprintjs/core"


type Props = {
    topic: ITopic,
}


export const Topic: React.FC<Props> = ({topic}) => {
    return (
        <Card interactive={false} elevation={Elevation.ONE}>
            <p>{topic.name}</p>
        </Card>
    )
}
