import { IsEmail, IsNumber, IsString } from "class-validator";
import { Gender } from "../gneder.enum";

export class CreateMembershipDto {

    @IsString()
    first_name: string;

    @IsString()
    last_name: string;

    @IsString()
    picture: string;

    @IsString()
    age: Gender[];

    @IsString()
    @IsEmail()
    email: string;

    @IsNumber()
    phone_number: number;

    @IsString()
    address_1: string;

    @IsString()
    address_2: string;

    @IsString()
    postal_code: string;

    @IsString()
    city: string;

    @IsString()
    state: string;
}
