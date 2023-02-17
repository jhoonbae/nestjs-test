import { ConflictException, InternalServerErrorException } from "@nestjs/common/exceptions";
import { CustomRepository } from "src/boards/typeorm.decorator";
import { Repository } from "typeorm";
import { AuthCredentialDto } from "./dto/auth.credential.dto";
import { User } from "./user.entity";
import * as bcrypt from 'bcrypt';

@CustomRepository(User)
export class UserRepository extends Repository<User> {
    async createUser(authCredentialDto : AuthCredentialDto) : Promise<object> {
        try {
            const salt_rounds = await bcrypt.genSalt()
            const {username, password} = authCredentialDto
            const hashed = await bcrypt.hash(password, salt_rounds)

            const user = this.create({
                username, 
                password : hashed
            })
            await this.save(user)
            return {success : true, message : "생성 완료."}
        } catch (error) {
            console.log('error :>> ', error.detail);
            error.code === '23505' ? 
                error = new ConflictException({success : false, message : '이미 존재하는 아이디'}) 
                : error = new InternalServerErrorException({success : false, message : "알 수 없는 오류."})
            throw error
        }
    }

}