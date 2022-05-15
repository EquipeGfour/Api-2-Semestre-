
import  htmlpdf  from 'html-pdf'
import Colaborador from '../models/colaborador.js';
import DadosAcademicos from '../models/Dados_Academicos.js';
import pessoafisica from '../models/pessoafisica.js';
import PessoaJuridica from '../models/pessoa_juridica.js';



export const PdfDadosColab = async (req, res) => { 
    const {id,nome,cpf} = req.query;
    const user = await Colaborador.findOne({
        where: { id:id},
        include:[
            {
                model: pessoafisica,
                attributes: ['cpf', 'colaborador_id']
            },
            {
                model: DadosAcademicos,
                as: "DadosAcademicos",
                attributes: ['id', 'formacao', 'cursos',
                    ['linguas', 'Idiomas'], 'termo_pi']
            },{
            model:PessoaJuridica
            }
            
            
        ]
    });
    const titulo ="Dados-Pessoais-pdf"
    const text =  `
    <div style='margin:15px;'>
        <hr></hr>
        <h3 style='color:black;text-align:center;height:5px;margin-top:15px'>Ficha De Dados Pessoais</h3>
        <br>
        <p>A pessoa ${user.nome}, inscrita no (CNPJ)/(CPF) nº ${user.pessoa_juridica ? user.pessoa_juridica.cnpj : user.pessoa_fisica.cpf} , com sede em SAO PAULO ,
        doravante denominado CONTRATANTE e neste ato representada na forma de seus atos constitutivos,
        com a naturalidade ${user.naturalidade} ,
        inscrito no CPF/CNPJ sob o nº. ${user.pessoa_juridica ? user.pessoa_juridica.cnpj : user.pessoa_fisica.cpf} 
        portador da data de nascimento ${user.data_nascimento}.
        <br>
        Dono do Email: ${user.email}
        <br>
        Telefone: ${user.telefone}
        <br>
        E Datado da Nacionalidade: ${user.nacionalidade}
        <br>
        Com o estado civil: ${user.estado_civil}
        <br>

        <h4>Claúsula Primeira</h4>

Finalidade do Tratamento dos Dados<br>
<br>
O Titular autoriza que a Empresa utilize os dados pessoais e dados pessoais sensíveis listados neste termo para as seguintes finalidades:<br>
<br>
– Permitir que a Empresa identifique e entre em contato com o titular, em razão do contrato de trabalho;<br>
<br>
– Para cumprimento de obrigações decorrentes da legislação, principalmente trabalhista e previdenciária, incluindo o disposto em Acordo ou Convenção Coletiva da categoria da Empresa;<br>
<br>
– Para procedimentos de admissão e execução do contrato de trabalho, inclusive após seu término;<br>
<br>
– Para cumprimento, pela Empresa, de obrigações impostas por órgãos de fiscalização;<br>
<br>
– Quando necessário para a executar um contrato, no qual seja parte o titular;<br>
<br>
– A pedido do titular dos dados;<br>
<br>
– Para o exercício regular de direitos em processo judicial, administrativo ou arbitral;<br>
<br>
– Para a proteção da vida ou da incolumidade física do titular ou de terceiros;<br>
<br>
Parágrafo Primeiro: Caso seja necessário o compartilhamento de dados com terceiros que não tenham sido relacionados nesse termo ou qualquer alteração contratual posterior, será ajustado novo termo de consentimento para este fim (§ 6° do artigo 8° e § 2° do artigo 9° da Lei n° 13.709/2018).
<br><br>
Vazamento de Dados ou Acessos Não Autorizados – Penalidades<br>
<br>
As partes poderão entrar em acordo, quanto aos eventuais danos causados, caso exista o vazamento de dados pessoais ou acessos não autorizados, e caso não haja acordo, a Empresa tem ciência que estará sujeita às penalidades previstas no artigo 52 da Lei n° 13.709/2018
        </p> 
        <br>
        

        
    <footer style='text-align:center;padding-top:50px'>
        <h3 >Nome Completo do Assinante do Contrato:</h3>
        
        <h4 style='text-decoration: underline'>${user.nome} </h4>
        
        <hr ></hr>
    </footer> `
    const options = {
        type:'pdf',
        format: 'A4',
        orientation: 'portrait'
    };
    htmlpdf.create(text,options ).toBuffer( (err, buffer) => {
        if (err) return res.status(500).json(err);
        console.log('Arquivo .pdf gerado com sucesso');
        res.setHeader('Content-Type', 'application/pdf');
        res.end(buffer);
    } 
    );
}