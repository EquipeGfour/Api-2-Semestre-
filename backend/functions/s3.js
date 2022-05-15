import aws from 'aws-sdk';

export const baixaDados = (dados) => {

    const arquivo = `${dados.nome_arquivos}${dados.extensao}`
    const s3 = new aws.S3();
    const options = {
        Bucket: process.env.BUCKET_NAME,
        Key: arquivo,
    };

    var fileStream = s3.getObject(options).createReadStream();
    fileStream.pipe(res);

}