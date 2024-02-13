import {S3ClientConfig} from "@aws-sdk/client-s3/dist-types/S3Client";
import {GetObjectCommand, ListObjectsV2Command, S3Client} from "@aws-sdk/client-s3";
import {getSignedUrl} from "@aws-sdk/s3-request-presigner";
import {ListObjectsV2CommandOutput} from "@aws-sdk/client-s3/dist-types/commands/ListObjectsV2Command";

export default class S3Service {
    static _instance: S3Service;
    private readonly _client!: S3Client;
    
    public static getInstance() {
        if (S3Service._instance) return S3Service._instance;
        
        return new S3Service();
    }
    
    constructor() {
        if (S3Service._instance) return S3Service._instance;
        
        S3Service._instance = this;
        this._client = this.getS3Client();
    }
    
    private getBucketName(): string {
        return 'lq-wedding';
    }
    
    private getPrefix(): string {
        return 'resize/';
    }
    
    private getClientParams(): S3ClientConfig {
        return  {
            region: 'us-east-1',
            credentials: {
                accessKeyId: process.env.S3_ACCESS_KEY ?? '',
                secretAccessKey: process.env.S3_SECRET_ACCESS_KEY ?? ''
            }
        }
    }
    
    private getS3Client(): S3Client {
        const configs = this.getClientParams();
        
        return new S3Client(configs);
    }

    public async getObjectURL(objectName: string): Promise<string> {
        const bucketName = this.getBucketName();
        const cmd = new GetObjectCommand({
            Bucket: bucketName,
            Key: objectName
        });
        
        return await getSignedUrl(this._client, cmd, { expiresIn: 604800 });
    }
    
    public async listAllObjects(): Promise<ListObjectsV2CommandOutput> {
        const bucketName = this.getBucketName();
        const prefix = this.getPrefix();
        
        const cmd = new ListObjectsV2Command({
            Bucket: bucketName,
            Prefix: prefix,
        });
        
        return await this._client.send(cmd);
    }
}