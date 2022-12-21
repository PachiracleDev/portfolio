import React from "react";
import classNames from "classnames";
import { useContextStore } from '@store'

function Overlay() {
    const { state, dispatch } = useContextStore()

    const cn = classNames("Overlay",
        {
            "OverlayActivate": state.isOverlayOpen,
        })


    return <div className={cn} onClick={() => dispatch({
        isModalMenuOpen: false,
        isOverlayOpen: false,
    })} />;
}

export default Overlay;