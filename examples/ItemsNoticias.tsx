type NoticiasItem = {
    key: string;
    title: string;
    description: string;
}

let items: NoticiasItem[] = [
    {
        key: "item1",
        title: "Cozimento solar pode ser solução para desmatamento e emissões de carbono",
        description: "De cordilheiras europeias frescas e úmidas, florestas da Ásia " +
        "Central, até a expansão urbana na América do Norte e as paisagens áridas " +
        "do continente africano, milhões de pessoas estão cozinhando usando apenas" +
         "os raios do sol como combustível.\n\n" +
        "Essa magia culinária é conhecida como cozimento solar. " +
        "Ao invés de queimar uma fonte de combustível, o cozimento solar" +
        "usa superfícies espelhadas para canalizar e concentrar a luz do " + 
        "sol em um espaço pequeno, cozinhando os alimentos sem produzir " +
        "emissões de carbono.\n\n" +
        "Acompanhe em https://www.cnnbrasil.com.br/internacional/cozimento-solar-pode-ser-solucao-para-desmatamento-e-emissoes-de-carbono/"
    },
    {
        key: "item2",
        title: "Crises energéticas devem influenciar estratégias climáticas, dizem especialistas",
        description: "O segundo semestre de 2021 tem sido marcado por uma série de" +
        " crises energéticas que atingiram regiões diferentes pelo mundo. Brasil, " + 
        "Europa, China, e mais recentemente a Índia, passaram a enfrentar dificuldades " +
        "para gerar energia, o que ameaça a recuperação econômica global." +

        "\n\nEm meio a essas dificuldades, o debate em torno das mudanças " +
        "climáticas ganha cada vez mais força. Uma delas é a chamada transição " + 
        "energética, em que países diminuem a dependência de fontes poluentes, " +
        "como petróleo, carvão e, em menor grau, gás natural.\n\n" +
        "Acompanhe em https://www.cnnbrasil.com.br/business/crises-energeticas-devem-influenciar-estrategias-climaticas-dizem-especialistas/"
    }
]

export { NoticiasItem, items};