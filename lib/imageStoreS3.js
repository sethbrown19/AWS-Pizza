const {
    PutObjectCommand, 
    S3Client
} = require('@aws-sdk/client-s3')

module.exports.save = async (name, data) => {
    const params = {
        Bucket: 'aws-pizza-luvrs',
        Key: `pizzas/${name}.png`,
        Body: Buffer.from(data, 'base64'),
        ContentEncoding: 'base64',
        ContentType: ';image/png'
    }
    const client = new S3Client({ region: 'us-east-1' })
    const command = new PutObjectCommand(params)
    await client.send(command)

    return `//aws-pizza-luvrs.s3.amazonaws.com/${params.Key}`
}