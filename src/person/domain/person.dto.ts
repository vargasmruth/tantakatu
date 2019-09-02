import { ApiModelProperty } from '@nestjs/swagger';

export class Person {
    @ApiModelProperty()
    readonly id: number;

    @ApiModelProperty()
    readonly fullname: string;
    @ApiModelProperty()
    readonly identityCard: string;
    @ApiModelProperty()
    readonly nit: string;
    @ApiModelProperty()
    readonly email: string;
    @ApiModelProperty()
    readonly mobile: string;
    @ApiModelProperty()
    readonly address: string;

    readonly code: string;
    readonly createAt: string;
    readonly state: boolean;
}
