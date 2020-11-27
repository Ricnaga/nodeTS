interface ITemplateVariables{
[key: string]: string | NumberConstructor;
}

export default interface IParseMailTemplateDTO{
    file:string;
    variables:ITemplateVariables;
}