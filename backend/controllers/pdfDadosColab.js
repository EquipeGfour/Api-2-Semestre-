
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
                attributes: ['id', 'formacao',
                'termo_pi','extra_curricular',
                'idioma','instituicao','carga_horaria',
                'ano_conclusao','status_curso',]
            },{
            model:PessoaJuridica
            }
            
            
        ]
    });
    console.log(user)
    let Extra_Curricular = ''
    let Idiomas = ''
    let DadosAcademy = '' 
    user.DadosAcademicos.forEach(element => {
        if (element.formacao){
            DadosAcademy +=`<p style='margin-top:0;'>Formação: ${element.formacao}  | Status do Curso: ${element.status_curso}
            Instituicao: ${element.instituicao} | Ano de Conclusão: ${element.ano_conclusao}</p>`
        }
        else if (element.extra_curricular){
            Extra_Curricular +=`<p style='margin-top:0;'>Extra Curricular: ${element.extra_curricular}   | Instituicao: ${element.instituicao}
            Ano de Conclusão: ${element.ano_conclusao}   | Carga Horaria: ${element.carga_horaria}</p>`
        }
        else if (element.idioma){
            Idiomas  += `<p style='margin-top:0;'>Idioma: ${element.idioma}<br>
            status do curso: ${element.status_curso}</p>` 
        }
    
    });

    const titulo ="Dados-Pessoais-pdf"
    const text =  `
    <div style='margin:15px;'>
        <hr></hr>
        <h3 style='color:black;text-align:center;margin-top:15px'>Ficha De Dados Pessoais</h3>
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
        E Datado da Nacionalidade: ${user.nacionalidade} | Com o estado civil: ${user.estado_civil}
        <h4 style='margin-bottom:0;'>Dados Academicos</h4>
        ${DadosAcademy}
        <h4 style='margin-bottom:0;'>Dados Extra Curriculares</h4>
        ${Extra_Curricular}
        <h4 style='margin-bottom:0;'>Dados de Idiomas</h4>
        ${Idiomas}
Finalidade do Tratamento dos Dados<br>
<br>
O Titular autoriza que a Empresa utilize os dados pessoais e dados pessoais sensíveis listados neste termo para as seguintes finalidades:<br>
<br>
Parágrafo Primeiro: Caso seja necessário o compartilhamento de dados com terceiros que não tenham sido relacionados nesse termo ou qualquer alteração contratual posterior, será ajustado novo termo de consentimento para este fim (§ 6° do artigo 8° e § 2° do artigo 9° da Lei n° 13.709/2018).
<br><br>
Vazamento de Dados ou Acessos Não Autorizados – Penalidades<br>
<br>
As partes poderão entrar em acordo, quanto aos eventuais danos causados, caso exista o vazamento de dados pessoais ou acessos não autorizados, e caso não haja acordo, a Empresa tem ciência que estará sujeita às penalidades previstas no artigo 52 da Lei n° 13.709/2018
        </p> 
        <br>
        
    <footer style='text-align:center;margin-top:0;'>
        <h3 >Nome Completo do Assinante do Contrato:</h3>
        
        <h4 style='text-decoration: underline'>${user.nome} </h4>
        
        <hr ></hr>
    </footer> 
    
    <hr>
    <h3 style='color:black;text-align:center;height:5px;margin-top:5px'>LGPD LEI GERAL DE PROTEÇÃO DE DADOS</h3>
    <h3 style='margin-bottom:0;'>Introduçao </h3>
    <p style='margin-top:0;'>
    A nova Lei Geral de Proteção de Dados Pessoais
    (LGPD) representa um importante avanço para o
    Brasil. A preocupação diante do uso indevido,
    comercialização e vazamento de dados pessoais faz
    da nova regulação uma garantia à privacidade. Em 14
    de agosto de 2018, o presidente Michel Temer
    sancionou a Lei Geral de Proteção de Dados do Brasil
    (LGPD), Lei 13.709/2018. A lei entrará em vigor em
    fevereiro de 2020, traçada em princípios éticos como
    a transparência, a prestação de contas e a boa-fé.
    <br>
    Com objetivo de mitigar o uso indevido e abusivo de
    dados, a lei será responsável por aprofundar a
    regulamentação das questões relativas ao uso de
    dados pessoais no ambiente virtual, impactando não
    somente as empresas brasileiras, mas todas as
    empresas que ofertem produtos ou serviços no
    cenário nacional.
    <br>
    Essa preocupação surgiu em complemento à Lei nº
    12.965/2014, também conhecida como o “Marco Civil
    da Internet”, que em seu artigo 7º prevê que “o acesso
    à internet é essencial ao exercício da cidadania”, e a
    entrada em vigor, em maio de 2018, do Regulamento
    Geral de Proteção de Dados da União Europeia (GDPR).
    Esse marco foi inovador e importante para o direito
    digital, no sentido de regulamentar quaisquer
    atividades no meio online. A nova lei, portanto, passará
    a ser modelo para muitos outros países reforçarem suas
    políticas pré- existentes.
    </p>
    <h3 style='margin-bottom:0;'>O que é a Lei Geral de Proteção de Dados?</h3>
    <p style='margin-top:0;'>
    “Art. 1º Esta Lei dispõe sobre o tratamento de dados pessoais, inclusive nos
    meios digitais, por pessoa natural ou por pessoa jurídica de direito público
    ou privado, com o objetivo de proteger os direitos fundamentais de liberdade
    e de privacidade e o livre desenvolvimento da personalidade da pessoa
    natural.”
    <br>
    De acordo com Art 5º, inciso X, a lei define o tratamento de dados como: toda
    operação realizada com dados pessoais, como as que se referem a coleta, produção,
    recepção, classificação, utilização, acesso, reprodução, transmissão, distribuição,
    processamento, arquivamento, armazenamento, eliminação, avaliação ou controle
    da informação, modificação, comunicação, transferência, difusão ou extração. 
    <br>
    A lei surgiu como um desafio para as empresas que lidam com dados pessoais. Ela
    é essencial para a harmonização de normas sobre proteção de dados já vigentes no
    Brasil, como por exemplo o Código de Defesa do Consumidor, a Lei de Acesso à
    Informação, a Lei do Cadastro Positivo e a Resolução BACEN 4.658/2018.
    </p>
    <h3 style='margin-bottom:0;'>O que é a Lei Geral de Proteção de Dados?</h3>
    <p style='margin-top:0;'>
    Os impactos desta nova norma são relevantes, tanto no aspecto da
    proteção da privacidade e dos dados pessoais, quanto para a atividade
    empresarial, considerando que a LGPD impõe uma série de diretrizes para
    que o controle de dados seja feito de forma lícita, impondo também
    penalidades significativas em caso de não cumprimento da norma. 
    <br>
    Diante disso, nasce a necessidade de compreender quais serão as
    alternativas para a adaptação das organizações quanto ao uso, divulgação,
    e armazenamento de dados e informações. Com a sanção presidencial, em
    agosto de 2018, as empresas terão até fevereiro de 2020 para se
    adequarem às novas regras. As empresas que demonstrarem conformidade
    e responsabilidade em relação às novas regras poderão alavancar uma
    vantagem competitiva no uso correto desses dados, aumentando o nível
    de confiança do seu público. 
    <br>
    Entre as ações proibidas pela LGPD estão a coleta, o uso e o
    armazenamento de dados de qualquer pessoa sem o consentimento, bem
    como a utilização dessas informações para práticas ilícitas ou abusivas.
    </p>
    <h3 style='margin-bottom:0;'>Conclusão</h3>
    <p style='margin-top:0;'> 
    A LGPD tem como princípio fundamental a proteção de dados pessoais e o
    objetivo central de garantir ao titular mais autonomia em relação ao uso dos
    seus dados. A nova cultura imposta pela lei provoca um grande impacto na
    atividade empresarial, exigindo adequações operacionais no tratamento de
    dados, para que a privacidade e a transparência andem lado-a- lado.<br>
    O advento da LGPD se deve muito em razão do amadurecimento nas últimas
    décadas sobre a importância da informação. Quanto mais transparência e
    conscientização houver em torno do tratamento de dados, menos abusiva e
    desonesta será a conduta das empresas, e mais confiável, palpável e eficaz
    será a privacidade dos usuários!
    </p>

    <footer style='text-align:center;'>
        <h3 >Nome Completo do Assinante do Contrato:</h3>
        
        <h4 style='text-decoration: underline'>${user.nome} </h4>
        
        <hr ></hr>
    </footer> 
    `
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