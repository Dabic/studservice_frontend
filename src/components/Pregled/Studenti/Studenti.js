import React, {useEffect, useState} from "react";
import Student from "./Student/Student";
import {connect} from 'react-redux'
import classes from './Studenti.module.css'
import Filter from "../../UI/Filter/Filter";

const Studenti = props => {
    const [studenti, setStudenti] = useState([])
    const [filteredStudenti, setFilteredStudenti] = useState([])
    useEffect(() => {
        switch (props.tip) {
            case 'po-grupama':
                setFilteredStudenti(props.studenti_grupa)
                setStudenti(props.studenti_grupa)
                break
            case 'po-godinama':
                setFilteredStudenti(props.studenti_godina)
                setStudenti(props.studenti_godina)
                break
            case 'svi-studenti':
                setFilteredStudenti(props.svi_studenti)
                setStudenti(props.svi_studenti)
                break
            default:
                break
        }
    }, [props.svi_studenti, props.studenti_grupa, props.studenti_godina, props.tip])
    const onFilterChange = (event) => {
        const value = event.target.value.toUpperCase()
        const studentList = studenti.filter(student => {
            return (
                (student.ime+student.prezime+student.smer+student.broj_indeksa+'/'+student.godina_upisa).toUpperCase()
                    .indexOf(value.split(' ').join('')) > -1
                ||
                (student.ime+student.prezime+student.smer+student.broj_indeksa+student.godina_upisa).toUpperCase()
                    .indexOf(value.split(' ').join('')) > -1
            )
        })
        setFilteredStudenti(studentList)
    }
    let render = (
        <div className={classes.Studenti}>
            <Filter onChange={onFilterChange}/>
            {
                filteredStudenti.map(student => {
                    return <Student key={student.smer+student.broj_indeksa+student.godina_upisa} student={student}/>
                })
            }
        </div>
    )
    if(studenti.length === 0){
        render = (
            <div className={[classes.NoStudenti, classes.Studenti].join(' ')}>
                <p>Studenti nisu pronadjeni.</p>
            </div>
        )
    }
    return render
}

const mapStateToProps = state => {
    return {
        studenti_grupa: state.studentiReducer.studenti_grupa,
        studenti_godina: state.studentiReducer.studenti_godina,
        svi_studenti: state.studentiReducer.svi_studenti,
    }
}
export default connect(mapStateToProps)(Studenti)