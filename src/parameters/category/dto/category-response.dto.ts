import { ApiModelProperty } from '@nestjs/swagger';

export class CategoryResponse {
    @ApiModelProperty()
    readonly id: number;

    @ApiModelProperty()
    readonly name: string;
}
