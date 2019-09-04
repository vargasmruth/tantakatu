import { ApiModelProperty } from '@nestjs/swagger';

export class SaleDetailResponse {
    @ApiModelProperty()
    readonly id: number;

    @ApiModelProperty()
    readonly saleId: number;

    @ApiModelProperty()
    readonly itemId: number;

    @ApiModelProperty()
    readonly price: number;

    @ApiModelProperty()
    readonly quantity: number;

    @ApiModelProperty()
    readonly partialAmount: number;

    @ApiModelProperty()
    readonly accountingNumber: string;

}
