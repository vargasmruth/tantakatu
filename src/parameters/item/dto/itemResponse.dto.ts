import { ApiModelProperty } from '@nestjs/swagger';

export class ItemResponse {
    @ApiModelProperty()
    readonly id: number;

    @ApiModelProperty()
    readonly name: string;

    @ApiModelProperty()
    readonly description: string;

    @ApiModelProperty()
    readonly price: number;

    @ApiModelProperty()
    readonly stock: number;

    @ApiModelProperty()
    readonly accountingId: number;

    @ApiModelProperty()
    readonly categoryId: number;

}
