export type ButtonProps = {
    type: "button" | "submit";
    title: string;
    icon?: string;
    variant: string;
    full?: boolean;
}

export type FeaturesItemProps = {
    title: string;
    icon: string;
    description: string;
}

export type FooterColumnProps = {
    title: string;
    children: React.ReactNode;
}

export interface CampProps {
    backgroundIMage: string;
    title: string;
    subtitle: string;
    peopleJoined: string;
}

