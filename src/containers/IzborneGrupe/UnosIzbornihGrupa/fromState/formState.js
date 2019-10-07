const formState = {
    semestar: {
        elementType: 'select',
        shouldValidate: false,
        options: [
            {value: 'parni', display: 'Parni semestar'},
            {value: 'neparni', display: 'Neparni semestar'}
        ],
        value: {value: 'parni', display: 'Parni semestar'},
        collapseContent: true,
        collapsed: true,
        label: 'Odabir semestra'
    },
    sk_pocetak: {
        elementType: 'input',
        placeholder: 'Skolska godina pocetak',
        type: 'text',
        shouldValidate: true,
        touched: false,
        requirements: {
            isNumber: true
        },
        value: '',
        label: 'Skolska godina pocetak'
    },
    sk_kraj: {
        elementType: 'input',
        placeholder: 'Skolska godina kraj',
        type: 'text',
        shouldValidate: true,
        touched: false,
        requirements: {
            isNumber: true
        },
        value: '',
        label: 'Skolska godina kraj'
    },
    smer: {
        elementType: 'select',
        shouldValidate: false,
        options: [
            {value: 'RN', display: 'RN - Racunarske nauke'},
            {value: 'RM', display: 'RM - Racunarske mreze'}
        ],
        value: {value: 'RN', display: 'RN - Racunarske nauke'},
        collapseContent: true,
        collapsed: true,
        label: 'Smer grupe'
    },
    oznaka_grupe: {
        elementType: 'input',
        placeholder: 'Oznaka grupe',
        type: 'text',
        shouldValidate: true,
        touched: false,
        requirements: {
            isGroup: true
        },
        value: '',
        label: 'Oznaka grupe'
    },
    kapacitet: {
        elementType: 'input',
        placeholder: 'Kapacitet grupe',
        type: 'text',
        shouldValidate: true,
        touched: false,
        requirements: {
            isNumber: true
        },
        value: '',
        label: 'Kapacitet grupe'
    },
    predmeti: {
        elementType: 'sharable-lists',
        odabir_predmeta: [],
        odabrani_predmeti: [],
        label: 'Predmeti grupe'
    },
    aktivnost: {
        elementType: 'radio-group',
        options: [
            {value: 'aktivna', display: 'Aktivna'},
            {value: 'neaktivna', display: 'Neaktivna'}
        ],
        value: {value: 'aktivna', display: 'Aktivna'},
        label: 'Aktivnost grupe'
    }
}
const formArray = []
let key = null
for(key in formState){
    formArray.push({
        id: key,
        data: formState[key]
    })
}
export default formArray