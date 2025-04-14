import { CanActivate, ExecutionContext, ForbiddenException, Injectable, UnauthorizedException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Role } from "../entities/user.entity";
import { ROLES_KEY } from "../roles.decorator";

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private readonly reflector: Reflector) {}

    canActivate(context: ExecutionContext): boolean {
        const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);

        // Si aucune restriction de rôle
        if (!requiredRoles) {
            return true;
        }

        const request = context.switchToHttp().getRequest();
        const user = request.user;

        // Vérification de l'authentification
        if (!user) {
            throw new UnauthorizedException('User not authenticated');
        }

        // Vérification des rôles
        if (!user.roles || !Array.isArray(user.roles)) {
            throw new ForbiddenException('Invalid user roles');
        }

        // Vérification si l'utilisateur a au moins un des rôles requis
        const hasRequiredRole = requiredRoles.some(role => 
            user.roles.includes(role)
        );

        if (!hasRequiredRole) {
            throw new ForbiddenException(
                `Requires roles: ${requiredRoles.join(', ')}`
            );
        }

        return true;
    }
}