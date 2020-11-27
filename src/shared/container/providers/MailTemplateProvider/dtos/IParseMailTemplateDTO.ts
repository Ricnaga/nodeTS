interface ITemplateVariables{
[key: string]: string | NumberConstructor;
}

export default interface IParseMailTemplateDTO{
    template:string;
    variables:ITemplateVariables;
}