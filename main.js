function validaCep(){
    const cepp = $('#PesquisaCEP').val()

    if (cepp.length != 8){
        alert("O CEP deve conter 8 digitos");
    }else{
        cep();
    }
}

async function cep() {

        const cep = $('#PesquisaCEP').val()
        const url = "https://viacep.com.br/ws/"+cep+"/json/"
        const response = await axios.get(url)
        const data = response.data
        const { localidade, uf, bairro, logradouro, complemento } = data

const result = `
            <div class= "Retorno" >
            <i class="bi bi-geo-alt"></i>Cidade: ${localidade} /
                Estado: ${uf} /
                Bairro: ${bairro} /
                Rua: ${logradouro} /
                Complemento: ${complemento}
                <i class="bi bi-geo-alt"></i></div>  `

                $('#Cidade').html(result)

}