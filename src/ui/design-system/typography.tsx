interface Props{
variant ?: "display" |"h1" | "h2" | "h3" | "h4" | "h5" | "lead" | "body-lg" | "body-sm" | "base-base"| "caption1" | "caption2" | "caption3" | "caption4";

component?: "h1" | "h2" | "h3" | "h4" | "h5"| "div"| "p" |"span";
children:React.ReactNode;
}

export const Typography = ({variant ="h3", children,component :Component ="div"}: Props) => {

    let variantStyles:string;
    switch (variant) {  
        case "display":
            variantStyles = "h1";
            break;
        case "h1":
            variantStyles = "h1";
            break;
        case "h2":
            Component = "h2";
            break;
        case "h3":
            Component = "h3";
            break;
        case "h4":
            Component = "h4";
            break;
        case "h5":
            Component = "h5";
            break;
        case "lead":
            Component = "p";
            break;
        case "body-lg":
            Component = "p";
            break;
        case "body-sm":
            Component = "p";
            break;
        case "base-base":
            Component = "p";
            break;
        case "caption1":
            Component = "p";
            break;
        case "caption2":
            Component = "p";
            break;
        case "caption3":
            Component = "p";
            break;
        case "caption4":
            Component = "p";
            break;

    }

return (
    <Component>
    {children}
    </Component>
)
}