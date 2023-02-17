import { Injectable } from '@nestjs/common';
import { AuthCredentialDto } from './dto/auth.credential.dto';
import { UserRepository } from './user.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private userRepository : UserRepository
    ){}

    async signUp(authCredentialDto : AuthCredentialDto) : Promise<object> {
        return await this.userRepository.createUser(authCredentialDto)
    }

    async signIn(authCredentialDto : AuthCredentialDto) :Promise<object> {
        const {username, password} = authCredentialDto
        const user = await this.userRepository.findOne({ where : {username}})
        if(user && (await bcrypt.compare(password, user.password))) return {success : true, message : "로그인 성공"}
        else return {success : false, message : "로그인 실패"}
    }
}
