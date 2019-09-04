import { ApiModelProperty } from '@nestjs/swagger';
import { SaleDetailResponse } from './sale-detail-response.dto';

export class SaleResponse {
    @ApiModelProperty()
    readonly id: number;

    @ApiModelProperty()
    readonly date: Date;

    @ApiModelProperty()
    readonly exchangeRate: number;

    @ApiModelProperty()
    readonly currency: number;

    @ApiModelProperty()
    readonly withDiscount: number;

    @ApiModelProperty()
    readonly discount: number;

    @ApiModelProperty()
    readonly amount: number;

    @ApiModelProperty()
    readonly paymentType: string;

    @ApiModelProperty()
    readonly invoiceNumber: string;

    @ApiModelProperty()
    readonly sellerId: number;

    @ApiModelProperty()
    readonly buyerId: number;

    @ApiModelProperty({ type: [SaleDetailResponse]})
    readonly detail: SaleDetailResponse[];

}
