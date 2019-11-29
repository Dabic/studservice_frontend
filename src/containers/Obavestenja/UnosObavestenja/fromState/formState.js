export const formState = {
    naslov: {
        elementType: 'input',
        placeholder: 'Naslov obavestenja',
        type: 'text',
        shouldValidate: true,
        touched: false,
        requirements: {
            isRequired: true
        },
        value: '',
        label: 'Naslov obavestenja'
    },
    text: {
        elementType: 'input',
        placeholder: 'Tekst obavestenja',
        type: 'textarea',
        value: '',
        label: 'Tekst obavestenja'
    },
    file: {
        elementType: 'input',
        placeholder: 'File obavestenja',
        type: 'file',
        shouldValidate: false,
        value: {},
        label: 'File obavestenja'
    }
}