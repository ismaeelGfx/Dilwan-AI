import { MouseEventHandler, MutableRefObject } from "react"

export type TypographyProps = {
    variant: "main-heading" | "heading" | "sub-heading" | "parapgraph" | "span" | "alt-heading" | "alt-heading-2"
    text: string | any
    spanText?: string
    extraClasses?: string
    extraSpanClasses?: string
    spanTextAlt?: string
}

export type ContainerProps = {
    children: React.ReactNode;
}

export type ButtonProps = {

    text: string
    extraClasses?: string
    handleClick?: MouseEventHandler<HTMLButtonElement>
}

export type SectionOneData = {
    img: string;
    text: string;
}

export type cardData = {
    img: string;
    heading: string;
    text: string;
}

export type SectionFiveLogo = {
    img: string;
}

export type PricingCardData = {
    title:  string     
    text:  string    
    price:  string       
    duration:  string     
    tick: string
    req1:  string    
    req2:  string    
    req3?: string    
    req4?:  string    
    req5?: string   
    req6?: string    
    btnText: string    
    btnClass: string
}

export type contactData = {
    name: string;
    email: string;
    number: string;
    message: string;
  };

  export type chatData = {
    id: number
    userText: string
    aiText: string
}


export type popularData = {
    img: string
    text: string
}

export type LoginData = {
    email: string;
    password: string;
    rememberMe: boolean;

}

export type RegisterData = {
    name : string
    email : string
    password : string
    confirmpassword : string
}

export  type RecentChat = {
    text: string
  }

  export  type List = {
    _id(_id: any): void
    listname: string
  }

  export type LoginRegProps = {
    handleClick: () => void;
    outsideClick?: MutableRefObject<HTMLDivElement | null>
  };