export const email_form = {
    typ: {
        elementType: 'select',
        shouldValidate: false,
        options: [],
        value: {},
        collapseContent: true,
        collapsed: true,
        defaultValue: {}
    },
    to: {
        elementType: 'tag-input',
        type: 'text',
        shouldValidate: false,
        placeholder: 'Kome',
        value: [],
        label: 'To: '
    },
    cc: {
        elementType: 'input',
        type: 'text',
        shouldValidate: false,
        placeholder: 'Cc',
        value: '',
        label: 'From: '
    },
    heading: {
        elementType: 'input',
        type: 'text',
        shouldValidate: false,
        placeholder: 'Naslov',
        value: '',
    },
    text: {
        elementType: 'input',
        type: 'textarea',
        shouldValidate: false,
        value: '',
        label: 'From: '
    },
    attach_file: {
        elementType: 'attach_file',
        shouldValidate: false,
    }
}