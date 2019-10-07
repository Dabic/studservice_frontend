import React from "react";
import classes from './Student.module.css'

const Student = props => {
    return (
        <div className={classes.Student}>
            <div className={classes.StudentStart}>
                <img src={props.student.icon} alt='student account' />
                <p className={classes.Grow}>{props.student.ime} {props.student.prezime}</p>
                <p className={classes.Hide}> {props.student.smer} {props.student.broj_indeksa}/{props.student.godina_upisa}</p>
            </div>
        </div>
    )
}

export default Student