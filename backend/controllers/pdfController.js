import  htmlpdf  from 'html-pdf'
import Colaborador from '../models/colaborador.js';
import pessoafisica from '../models/pessoafisica.js';
import PessoaJuridica from '../models/pessoa_juridica.js';


export const PdfContrato = async (req, res) => { 
    const {id,nome,cpf} = req.query;
    console.log(req.query,req.params);
    const user = await Colaborador.findOne({
        where: { id:id},
        include:[{ 
            model:pessoafisica
        },{
            model:PessoaJuridica
        }]

        
    });
    console.log(user);
    const titulo ="Contrato"
    const text =  `
    <div style='margin:15px;'>
        <hr></hr>
        <h3 style='color:black;text-align:center;height:5px;margin-top:45px'>CONTRATO DE PRESTAÇÃO DE SERVIÇOS DAS PARTES</h3>
        <br>

        <p>A pessoa ${user.nome}, inscrita no (CNPJ)/(CPF) nº ${user.Pessoa_Juridica ? user.Pessoa_Juridica.cnpj : user.Pessoa_Fisica.cpf} , com sede em SAO PAULO ,
        doravante denominado CONTRATANTE e neste ato representada na forma de seus atos constitutivos,
        com a naturalidade ${user.naturalidade} ,
        inscrito no CPF sob o nº. ${user.Pessoa_Juridica ? user.Pessoa_Juridica.cnpj : user.Pessoa_Fisica.cpf} 
        portador da data de nascimento ${user.data_nascimento}.
        Decidem as partes, na melhor forma de direito, 
        celebrar o presente CONTRATO DE PRESTAÇÃO DE SERVIÇOS,
        que reger-se-á mediante as cláusulas e condições adiante estipuladas.
        </p>
        <p>Em todos os contratos, há que se cumprir várias exigências, tais como: efetuar o registro na carteira de trabalho do empregado (CTPS Digital)"Não se utiliza A caso de Cnpj Pessoa Juridica",
        pagar salário, férias anuais mais 1/3 constitucional, 13º Salário, salário-família, horas extras, recolher o Fundo de Garantia por Tempo de Serviços (FGTS),
        recolher a contribuição previdenciária, fornecer vale-transporte, vale-refeição, realizar exames médicos,
        prestar informações ao eSocial, etc.</p>
        <p>
            CLÁUSULA PRIMEIRA - DO OBJETO<br>
            <br>
            1.1 O presente contrato tem por objeto a prestação de serviços profissionais especializados em Departamento.Cargo por parte da CONTRATADA de acordo com os termos e condições detalhados neste contrato.<br>
            <br>
            CLÁUSULA SEGUNDA - OBRIGAÇÕES DA CONTRATANTE<br>
            <br>
            2.1 A CONTRATANTE deverá fornecer à CONTRATADA todas as informações necessárias à realização do serviço, devendo especificar os detalhes necessários à perfeita consecução do mesmo.<br>
            <br>
            2.2 A CONTRATANTE é obrigada ainda a disponibilizar: Ionic Health (EPIS ETC...)<br>
            <br>
            2.3 A CONTRATANTE deverá efetuar o pagamento na forma e condições estabelecidas na cláusula quinta.<br>
        </p>
        <p>CLÁUSULA Segunda - Da Execução dos Serviços</p>
        <p>5.1 Os serviços objeto do presente contrato serão realizados pela CONTRATADA , sob sua exclusiva responsabilidade,
        de forma a atender as necessidades da CONTRATANTE, em conformidade com o presente contrato.<br>
        <br>
        5.2 Os serviços serão prestados pela CONTRATADA no horário que lhe for conveniente, na sede da CONTRATANTE
        ou caso seja possível em razão da modalidade dos serviços contratados,de forma remota na sede da 
        ou em outro local, segundo seus próprios critérios, desde que em dias úteis, em horário comercial,
        Em caso de trabalho do sócio ou empregados da CONTRATADA nas dependências da CONTRATANTE 
        , esta se compromete a fornecer condições de segurança, higiene e salubridade para a fiel execução dos serviços contratados.
        
        </p> 
    <div style='text-align:center;padding-top:50vh'>
        <h3 >Nome Completo do Assinante do Contrato:</h3>
        
        <h4 style='text-decoration: underline'>${user.nome} </h4>
        
        <hr ></hr>
    </div> `
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

