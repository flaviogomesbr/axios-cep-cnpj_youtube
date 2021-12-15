import axios from 'axios';

class Api {

    static async  getInformation (cnpj){
        const response = new Tabela((await axios.get(`https://www.receitaws.com.br/v1/cnpj/${cnpj}`)).data);
        return response;
    }
}

class Tabela{
    constructor({cnpj, nome , fantasia, email, telefone, qsa, cep, uf, municipio, bairro, logradouro, numero, complemento }){
        
        //TABELA UM//
        this.cnpj = cnpj
        //this.inscricaoestadual = inscricaoestadual (indisponível)
        //this.segmento = segmento (indisponível)
        this.nome = nome //nome aparentemente significa razao social na API
        this.fantasia = fantasia,
        this.email = email, //a API retorna apenas um tipo de e-mail
        //this.emailfinanceiro = emailfinanceiro, //a API retorna apenas um e-mail
        this.telefone = telefone, //a API retorna apenas um tipo de e-mail (na tabela do Jira está indicado telefone do financeiro)

        //TABELA DOIS//
        this.qsa = qsa, //a API retorna apenas o cargo e o nome do sócio (na tabela do Jira está indicado CPF e e-mail)

        //TABELA TRÊS//
        this.cep = cep
        this.uf = uf //uf significa unidade federativa, ou seja, estado
        this.municipio = municipio,
        this.bairro = bairro, //a API retorna apenas um e-mail
        this.logradouro = logradouro,
        this.numero = numero,
        this.complemento = complemento
        
    }
}

 //DIGITE O CNPJ NO CAMPO ONDE CONSTA O NÚMERO
Api.getInformation('05555382000133').then(v => {console.log(v)});