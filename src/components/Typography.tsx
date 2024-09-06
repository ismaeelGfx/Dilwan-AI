import { TypographyProps } from "../types/types"


const Typography: React.FC<TypographyProps> = ({variant , text , spanText, extraClasses ,extraSpanClasses, spanTextAlt}) => {
  return (
    <>
    {
          variant === "main-heading" ? <h1 className={extraClasses}>{text}</h1> : 
      variant === "alt-heading" ? <h1 className={extraClasses}>{text} <span className={extraSpanClasses}>{spanText}</span></h1>:
      variant === "alt-heading-2" ? <h1 className={extraClasses}>{text} <span className={extraSpanClasses}>{spanText}</span> <span>{spanTextAlt}</span></h1>:

     variant === "heading" ? <h2 className={extraClasses}>{text}</h2> :
     variant === "sub-heading" ? <h3 className={extraClasses}>{text}</h3> :
     variant === "parapgraph" ? <p className={extraClasses}>{text}</p> :
     variant === "span" ? <span className={extraClasses}>{text}</span> :
     null
    }
    </>
  )
}

export default Typography