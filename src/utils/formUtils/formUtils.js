export const formDataToArray = (form) => {
    const frmArr = []
    let key = null
    for (key in form) {
        frmArr.push({
            id: key,
            data: form[key]
        })
    }
    return frmArr
}