const title = "Variedades Sofia";
const email = "variednubia@gmail.com";
const mensajeWhatsApp = encodeURIComponent(
    "¡Hola! Estoy interesado en conocer más sobre los productos de " + title + " y me gustaría obtener más información. ¡Gracias!"
);
const numeroWhatsApp = "+573503470248";

const textos = {
    index: {
        title: title,
    },
    homeContent: {
        title: title,
    },
    about: {
        description1: "En Variedades Sofia, ofrecemos una mezcla perfecta de diversión y sabor. Desde nuestra juguetería, llena de productos que alegrarán a los más pequeños, hasta nuestras deliciosas obleas y helados, tenemos algo para todos.\n" +
            "Nos especializamos en proporcionar sonrisas y sabores únicos para todas las edades. Nuestro objetivo es que cada visita sea una experiencia memorable, ya sea que estés buscando el juguete perfecto o simplemente quieras disfrutar de un dulce capricho.\n" +
            "En Variedades Sofia, nos enorgullece ofrecer productos de alta calidad y un servicio excepcional. Nuestro equipo está dedicado a hacer que cada cliente se sienta especial y satisfecho con su compra.\n" +
            "Ven y descubre por qué somos la elección favorita para juguetes, obleas y helados. ¡En Variedades Sofia, cada día es una celebración de sonrisas y sabores!"
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email,
    },
    footer: {
        slogan: {
            p1: "En Variedades Nubia, cada día es una celebración de sonrisas y sabores.",
            p2: ""
        },
        address: "", // Información no proporcionada
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/profile.php?id=61565632154784&mibextid=ZbWKwL",
        instagram: "https://www.instagram.com/variedades_.sofia?igsh=Z3NhZ20yOWVqem84",
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
    },
};

export default textos;
