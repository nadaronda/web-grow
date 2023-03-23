import React from "react";

export const fondo_1 = {
    backgroundImage: `url("/fondo_flor.jpg")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
};
export const fondo_2 = {
    backgroundImage: `url("/raw.png")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
};
export const fondo_3 = {
    backgroundImage: `url("")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
};

const centrar = {
    display: "flex",
    justifyContent: "center",
};

export const Section: React.FC<{ children: any; variant: any }> = ({
    children,
    variant,
}) => {
    let estilo;
    if (variant == "fondo1") {
        estilo = fondo_1;
    } else if (variant == "fondo2") {
        estilo = fondo_2;
    }

    return (
        //TODO: Meter emotion y mezclar estilos
        <section style={estilo}>
            <div>{children}</div>
        </section>
    );
};



