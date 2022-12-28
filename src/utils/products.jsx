// id 1: vino 
// id 2: cerveza
// id 3: espirituosas
// id 4: combos


const products = [
    {
        id: 1,
        name:"Fernet Branca",
        cost: "$1890",
        description: "El fernet es una bebida alcohólica de la familia de los amaros italianos elaborada a partir de la maceración de varios tipos de hierbas en alcohol obtenido de la fermentación de la vid. Su porcentaje de alcohol es de 40% vol.",
        capacity:"750ml",
        image: ["https://res.cloudinary.com/dog6eblxr/image/upload/v1670253645/branca_htkpzm.webp"],
        sales: 0,
        categoryId: 3,
        stock: 10
    },
    {
        id: 2,
        name: "Andes ipa",
        cost: "$240",
        description: "Se caracteriza por el amargor que le otorga su alto contenido de lúpulo. La IPA Andina contiene uva mendocina y es clave para que en el paladar perciba una especie de dulzor, que a su vez hace el amargor más amigable.",
        capacity:"473ml",
        image: ["https://res.cloudinary.com/dog6eblxr/image/upload/v1670253629/andes_ipa_tnkc9l.webp"],
        sales: 0,
        categoryId: 2,
        stock: 10

    },
    {
        id: 4,
        name: "Corona",
        cost: "$260",
        description: "Cerveza clara y brillante, de espuma blanca y consistente. Destacan sus ligeras notas afrutadas, resultado de la fermentación. De cuerpo medio, fresca, balanceada y muy fácil de beber",
        capacity:"330ml",
        image: ["https://res.cloudinary.com/dog6eblxr/image/upload/v1670253645/corona330ml_t8gnxv.webp"],
        sales: 0,
        categoryId: 2,
        stock: 10
    },
    {
        id: 5,
        name: "Heineken",
        cost: "$370",
        description: "es una cerveza única, y desde 1873 hasta la fecha conserva la misma calidad, principios e ingredientes. Se fermenta en el fondo de tanques horizontales, lo que la hace mas clara, pura y durable. 5% Alc.",
        capacity:"473ml",
        image: ["https://res.cloudinary.com/dog6eblxr/image/upload/v1670253644/heineken_473ml_yj2kvk.webp"],
        sales: 0,
        categoryId: 2,
        stock: 10
    },
    {
        id: 6,
        name: "Stella artois",
        cost: "$380",
        description: "Lager de color dorado pálido, muy brillante y con una espuma consistente. Una cerveza muy equilibrada donde predominan moderadas notas a frutas blancas y de cereal que resaltan levemente sobre el aroma herbal del lúpulo Saaz.",
        capacity:"473ml",
        image: ["https://res.cloudinary.com/dog6eblxr/image/upload/v1670253644/stellaartois_473ml_gasemp.webp"],
        sales: 0,
        categoryId: 2,
        stock: 10
    },
    {
        id: 7,
        name: "Jack Daniels honey",
        cost: "$10800",
        description: "Tennessee Honey llega de entrada con un suave toque de miel y canela en proporción adecuada. Se percibe un sabor especiado que reemplaza el 'toque de fuego' del whiskey regular.",
        capacity:"750ml",
        image: ["https://res.cloudinary.com/dog6eblxr/image/upload/v1670253644/jackdaniels_honey_fglm4e.webp"],
        sales: 0,
        categoryId: 3,
        stock: 10
    },
    {
        id: 8,
        name: "Greygoose",
        cost: "$15900",
        description: "Vodka premium que tiene una composición que denota el dulzor de las almendras y la manzana, con un toque de bálsamo de limón, el cual es característico en la esencia de este licor, con un aporte al final de pimiento verde.",
        capacity:"750ml",
        image: ["https://res.cloudinary.com/dog6eblxr/image/upload/v1670253643/greygoose_o2ai30.webp"],
        sales: 0,
        categoryId: 3,
        stock: 10
    },
    {
        id: 9,
        name: "Luigi Bosca malbec",
        cost: "$2890",
        description: "tinto de color rojo violáceo brillante. Sus aromas son intensos y amables, con notas que recuerdan a frutas rojas, y tonos algo florales y especiados. En boca es generoso, fluido y expresivo, con taninos incipientes.",
        capacity:"750ml",
        image: ["https://res.cloudinary.com/dog6eblxr/image/upload/v1670253644/luigibosca_malbec_z1mage.webp"],
        sales: 0,
        categoryId: 1,
        stock: 10
    },
    {
        id: 10,
        name: "Luigi Bosca cabernet sauvignon",
        cost: "$2700",
        description: "Es un tinto de color rojo rubí profundo y brillante. Sus aromas son sutiles y equilibrados, con notas de frutos negros, especias y cuero. En boca es jugoso y expresivo, con taninos finos y firmes que se agarran.",
        capacity:"750ml",
        image: ["https://res.cloudinary.com/dog6eblxr/image/upload/v1670253644/luigibosca_cabsauvignon_leyaan.webp"],
        sales: 0,
        categoryId: 1,
        stock: 10
    },
    {
        id: 11,
        name: "Trapiche reserva chardonay",
        cost: "$1200",
        description: "De color amarillo verdoso, este vino expresa aromas a peras y pastel de manzana, con un dejo de pan tostado. En boca presenta una buena frescura, es vibrante y mineral con un final muy untuoso.",
        capacity:"750ml",
        image: ["https://res.cloudinary.com/dog6eblxr/image/upload/v1670253644/trapiche_reserva_chardonay_tiwx8l.webp"],
        sales: 0,
        categoryId: 1,
        stock: 10
    },
    {
        id: 12,
        name: "Trumpeter malbec",
        cost: "$2200",
        description: "Rojo violáceo brillante, seduce con sus aromas frutales (cerezas) y especiados (canela, cardamomo, pimienta negra). Posee gran cuerpo y su vivaz estructura acentúa los taninos intensos que se vuelven aterciopelados en el retrogusto.",
        capacity:"750ml",
        image: ["https://res.cloudinary.com/dog6eblxr/image/upload/v1670253644/trumpeter_ntctsd.webp"],
        sales: 0,
        categoryId: 1,
        stock: 10
    },
    {
        id: 13,
        name: "Trapiche sauvignon blanc",
        cost: "$890",
        description: "De color amarillo brillante con tintes verdosos. Aroma frescos de pomelo y espárragos. Seco en boca con una acidez placentera. Ideal como aperitivo.",
        capacity:"750ml",
        image: ["https://res.cloudinary.com/dog6eblxr/image/upload/v1670253644/trapiche_sauvblanc_cydrhn.webp"],
        sales: 0,
        categoryId: 1,
        stock: 10
    },
    {
        id: 14,
        name: "Fernet branca + coca cola 2,25lts",
        cost: "$2250",
        description: "Fernet branca + coca cola 2,25lts precio promocional.",
        capacity:"",
        image: ["https://res.cloudinary.com/dog6eblxr/image/upload/v1670253643/fernet_coca_jbldre.webp"],
        sales: 0,
        categoryId: 4,
        stock: 10
    }
]

export default products;
