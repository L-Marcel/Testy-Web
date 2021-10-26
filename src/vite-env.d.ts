/// <reference types="vite/client" />

//Components
declare namespace Carousel {
  export interface PCarousel {
    data: IItem[];
  }
  export interface IItem {
    img: string;
    title: string;
    subtitle?: string;
    description?: string;
  }
  export interface PItem {
    data: IItem;
    selected: boolean;
  }
}

declare namespace Button {
  export interface PButton {
    icon?: import("react-icons").IconType;
    onClick?: () => void;
    children: string;
  }
  export interface PButtonGroup {
    children: JSX.Element[];
  }
}

declare namespace Input {
  export interface PInput {
    value: any;
    name: string;
    type: string;
    onChange: (value: any, name: string) => void;
    placeholder?: string;
    icon?: JSX.Element;
  }
}

declare namespace PopUp {
  export interface PPopUp {
    text: string;
    timeToClose: number;
    isOpen: boolean;
  }
}

//Services
declare namespace User {
  export interface Info {

  }
  export interface LoginCredentials {
    email: string;
    password: string;
  }
}

declare namespace App {
  export interface Context {
    user: User.Info | null;
    setUser: (user: User.Info | null) => void;
    popUp: PopUp.PPopUp;
    callPopUp: (text: string, timeToClose?: number) => void;
    closePopUp: () => void;
  }
  export interface Provider {
    children: JSX.Element;
  }
}

declare namespace Login {
  export type Response = Login.FailureResponse | Login.SuccessResponse;
  export interface FailureResponse {
    status: "failure";
    error: {
      code: string | number,
      message: string,
      email: string,
      credential: any
    }
  }
  export interface SuccessResponse {
    status: "success";
    token: string;
  }
}