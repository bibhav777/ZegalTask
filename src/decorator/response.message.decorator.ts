import { applyDecorators, SetMetadata } from "@nestjs/common";

export const ResponseMessage = (message: string, source?: string[]): any =>
  applyDecorators(
    SetMetadata("message", message.toLocaleLowerCase()),
    SetMetadata("source", source),
  );
