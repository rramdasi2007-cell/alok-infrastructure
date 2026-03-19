import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Contact {
    serviceType: string;
    name: string;
    email: string;
    message: string;
    phone: string;
}
export interface CompanyStats {
    yearsExperience: bigint;
    clientsServed: bigint;
    projectsCompleted: bigint;
}
export interface backendInterface {
    getAllEnquiries(token: string): Promise<Array<Contact>>;
    getCompanyStats(): Promise<CompanyStats>;
    login(username: string, password: string): Promise<string>;
    logout(token: string): Promise<void>;
    submitEnquiry(name: string, email: string, phone: string, message: string, serviceType: string): Promise<void>;
}
