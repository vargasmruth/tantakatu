import { ApiModelProperty } from '@nestjs/swagger';

export class SellerResponse {
    @ApiModelProperty()
    readonly id: number;

    @ApiModelProperty()
    readonly personId: number;
}
