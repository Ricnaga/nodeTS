interface IMailConfig{
    driver: 'ethereal' | 'ses';
    defaults:{
        from:{
            email: string;
            name: string;
        }
    }
}

export default{
    driver: process.env.MAIL_DRIVER || 'ethereal',

    defaults:{
        from:{
            email: 'email@amazon.aws.com',
            name: 'Ricardo da Amazon'
        }
    }
} as IMailConfig