import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialDto } from './dto/auth.credential.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService : AuthService) {}

    @Post('/sign-up')
    signUp(@Body() authCredentialDto : AuthCredentialDto) : Promise<object> {
        console.log('authCredentialDto :>> ', authCredentialDto);
        return this.authService.signUp(authCredentialDto)
    }

    @Post('/sign-in')
    signIn(@Body(ValidationPipe) authCredentialDto : AuthCredentialDto) : Promise<object> {
        return this.authService.signIn(authCredentialDto)
    }

}
