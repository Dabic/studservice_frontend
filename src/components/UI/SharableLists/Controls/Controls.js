import React from "react";
import classes from './Controls.module.css'

const Controls = props => {
    return (
        <div className={classes.Controls}>
            <div className={classes.Control}>
                <div className={classes.DesktopControls}>
                    <button onClick={(event) => props.clicked(event, 'ADD')} disabled={!props.odabir.length > 0}
                            className={classes.ControlButton}>
                        <i className={'fas fa-angle-right'}/>
                    </button>
                </div>
                <div className={classes.MobileControls}>
                    <button onClick={(event) => props.clicked(event, 'ADD')} disabled={!props.odabir.length > 0}
                            className={classes.ControlButton}>
                        <i className={'fas fa-angle-down'}/>
                    </button>
                </div>
            </div>
            <div className={classes.Control}>
                <div className={classes.DesktopControls}>
                    <button onClick={(event) => props.clicked(event, 'REMOVE')} disabled={!props.odabrani.length > 0}
                            className={classes.ControlButton}>
                        <i className={'fas fa-angle-left'}/>
                    </button>
                </div>
                <div className={classes.MobileControls}>
                    <button onClick={(event) => props.clicked(event, 'REMOVE')} disabled={!props.odabrani.length > 0}
                            className={classes.ControlButton}>
                        <i className={'fas fa-angle-up'}/>
                    </button>
                </div>
            </div>
            <div className={classes.Control}>
                <div className={classes.DesktopControls}>
                    <button onClick={(event) => props.clicked(event, 'REMOVE_ALL')}
                            disabled={!props.selection.length > 0} className={classes.ControlButton}>
                        <i className={'fas fa-angle-double-left'}/>
                    </button>
                </div>
                <div className={classes.MobileControls}>
                    <button onClick={(event) => props.clicked(event, 'REMOVE_ALL')}
                            disabled={!props.selection.length > 0} className={classes.ControlButton}>
                        <i className={'fas fa-angle-double-up'}/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Controls