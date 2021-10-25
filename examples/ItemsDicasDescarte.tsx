type DicaDescarteItem = {
    key: string;
    title: string;
    description: string;
}

let items: DicaDescarteItem[] = [
    {
        key: "item1",
        title: "Separe os seus resíduos por categoria",
        description: "É preciso separar em casa três tipos de resíduos: " + 
        "lixo orgânico, lixo material não reciclável e lixo material reciclável.\n" + 
        "Separe também os resíduos orgânicos dos secos. E sempre utilize sacos " +
        "biodegradáveis."
    },
    {
        key: "item2",
        title: "Separe o óleo de cozinha",
        description: "Óleo de cozinha usado também é reciclável." +
        "Algumas pessoas, ou entidades, transformam o óleo em sabão. " +
        "Uma única lata de 1 litro de óleo usado, despejada na pia," +
        " além de entupir o encanamento, pode contaminar até 18 mil " + 
        "litros d’água, quase dois caminhões pipa.\n" +
        "Existem empresas que coletam este resíduo de forma gratuita."
    }
]

export {DicaDescarteItem, items};