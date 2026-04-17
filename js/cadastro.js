document.addEventListener('DOMContentLoaded', () => {
    const inputData = document.getElementById('data_nasc');

    if (inputData) {
        inputData.addEventListener('input', (e) => {
            let valor = e.target.value.replace(/\D/g, ""); // Remove o que não é número
            
            // Aplica a máscara DD/MM/AAAA
            if (valor.length > 4) {
                valor = valor.replace(/(\d{2})(\d{2})(\d{0,4})/, "$1/$2/$3");
            } else if (valor.length > 2) {
                valor = valor.replace(/(\d{2})(\d{0,2})/, "$1/$2");
            }
            
            e.target.value = valor;
        });
    }
});