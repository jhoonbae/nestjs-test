// nest js 에서 class 보다 interface 를 선호하는 이유는
// 클래스는 런타임에서 작동하기 때문에 파이프같은 기능을
// 이용할 때 더 유용하다.

import { IsNotEmpty } from "class-validator"

export class CreateBoardDto {
    @IsNotEmpty()
    title : string

    @IsNotEmpty() 
    description : string
}