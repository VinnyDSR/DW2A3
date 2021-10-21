const masks = {
    cpf(value){
        return value
        .replace(/\D/g,'')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1');
    },

    dt_nasc(value){
        return value
        .replace(/\D/g,'')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1');
    },

    email(value){
        return value
        .replace(/\D/g,'')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1');
    }
}




document.querySelectorAll('input').forEach(($input) => {
    const field = $input.dataset.js;

    $input.addEventListener('input', (e) => {
        e.target.value = masks[field](e.target.value)
    }, false)


})