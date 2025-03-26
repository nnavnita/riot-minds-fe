export interface Freelancer {
    id: number,
    Name: string,
    Email: string
};

export interface About {
    id: number,
    Title: string,
    Subtitle: string,
    Content: string,
    Images: {
        [key: string]: any,
        url: string,
    }[]
};

export interface Hero {
    id: number,
    Title: string,
    Subtitle: string,
    Content: string,
    Image: {
        [key: string]: any,
        url: string,
    }
};

export interface FreelancerContent {
    id: number,
    Title: string,
    Subtitle: string,
    Content: string
};